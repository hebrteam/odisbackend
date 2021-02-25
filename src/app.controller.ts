import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Allow only request from domain.com/odis
@Controller('odis')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
