import { Body, Controller, ForbiddenException, Get, HttpCode, Post, Query, Redirect, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { StatusCodes } from 'http-status-codes';
import { HttpExceptionFilter } from './filters/http-exception.filter';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Post()
  @UseFilters(new HttpExceptionFilter)
  async save(){
    throw new ForbiddenException()
  }

  // facultatif param
  @Get('/hello')
  sayHello(@Query('name') name?: string): string {
    return this.appService.getHello(name?? 'unknow');
  }

  @Post('/new/cats')
  @HttpCode(StatusCodes.CREATED)
  create(){
    return `This action adds a new cat`;
  }

  @Get('/nest/docs')
  @Redirect('https://docs.nestjs.com/controllers',StatusCodes.MOVED_TEMPORARILY)
  getDocs(@Query('version') version: string){
    if (version === 'google') {
      return { url: 'https://www.google.com' }
    }
  }
}




