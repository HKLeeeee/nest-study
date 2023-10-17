import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {}

  @Get('/test')
  test(): string {
    return this.appService.getHello();
  }

  @Get('/test/:id')
  paramTest(@Param('id') id: number): string {
    return `I got ${id}`;
  }
}
