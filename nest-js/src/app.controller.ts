import { Controller, Get, HttpCode, Post, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { SumServiceService } from './sum-service/sum-service.service';
import { StatusCodes } from 'http-status-codes';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sumService: SumServiceService,
  ) {}


  // facultatif param
  @Get('/hello')
  sayHello(@Query('name') name?: string): string {
    return this.appService.getHello(name?? 'unknow');
  }

  @Get('/sum')
  getSum(
    @Query('num1') a: number,
    @Query('num2') b: number
  ): number {
    return this.sumService.getSum(a,b);
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




