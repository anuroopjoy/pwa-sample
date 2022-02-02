import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  login(@Body() body: { username: string; password: string }): boolean {
    return this.appService.login(body);
  }

  @Get('cities')
  getCities(): { name: string; image: string; alt: string }[] {
    return this.appService.getCities();
  }

  @Post('subscription')
  subscription(@Body() body: { sub: any }): any {
    return this.appService.subscription(body);
  }

  @Post('notifications')
  notifications(@Body() body: { data: any }) {
    return this.appService.notifications(body);
  }
}
