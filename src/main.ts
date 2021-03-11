import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

// Create a logger instance
const logger = new Logger('Main');

// Create the microservice options object

const microserviceOptions: MicroserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 4200,
  },
}

async function bootstrap() {
  const port = process.env.PORT ? Number(process.env.PORT) : 8080;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, microserviceOptions);
  app.listen(() => { logger.log('Microservice is listening.....') });

  /*
    const options = new DocumentBuilder()
      .setVersion('1.0')
      .build();
  
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/docs', app, document);*/

  // await app.listen(3000);
  // await app.listen(() => console.log('Microservice listening on port:', port));
}
bootstrap();
