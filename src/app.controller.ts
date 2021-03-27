import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

// Allow only request from domain.com/odis
@Controller()
@ApiTags("Home")
export class AppController {

  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) { }

  /*
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }*/

  @MessagePattern('hello')
  async hello(input?: string): Promise<any> {
    this.logger.log('Adding hello method' + input.toString()); // Log something on every call
    return `Hello, ${input || 'there'}!`;
  }

  @MessagePattern('add')
  async accumulate(data: number[]) {
    this.logger.log('Adding accumulate method' + data.toString()); // Log something on every call
    // console.log(`Channel: ${context.getChannel()}`);
    return this.appService.accumulate(data);
    // return (data || []).reduce((a, b) => a + b);
  }


  @MessagePattern('notifications')
  // getNotifications(@Payload() data: number[], @Ctx() context: RedisContext) {
  getNotifications(@Payload() data: number[]) {
    return `Hello, ${data || 'there'}!`;
    // console.log(data, `Channel: ${context.getChannel()}`);
  }
}
