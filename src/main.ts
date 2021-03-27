import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

// Create a logger instance
const logger = new Logger('Main');

// Set the port
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// Create the microservice HTTP.TCP options object
const microserviceOptions: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: port,
  },
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, microserviceOptions);
  app.listen(() => { logger.log('Microservice is listening...port:' + port) });
}
bootstrap();

// Create the microservice Redis options object
/*
const microserviceOptions: MicroserviceOptions = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379',
  },
}
*/
