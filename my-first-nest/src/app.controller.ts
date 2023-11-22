import { Controller, Get, Param, Render, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {}

  @Get('/test')
  test(@Req() req: Request): string {
    console.log(req.cookies);
    return this.appService.getHello();
  }

  @Get('/test/:id')
  paramTest(@Param('id') id: number): string {
    return `I got ${id}`;
  }
}
