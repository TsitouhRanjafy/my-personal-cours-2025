import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';
import { Request, Response } from 'express';
import { SumServiceService } from './sum-service/sum-service.service';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sumService: SumServiceService
  ) {}

  @Get()
  getHello(@Req() req: Request,@Res() res: Response){
    console.log(req.headers);
    res.status(200).json({message: 'Hello World!'})
  }

  @Get('/hello')
  sayHello(@Query('name') name?: string): string {
    return this.appService.getHello(name?? 'unknow');
  }

  @Get('/askquestion')
  askQuestion(@Query('question') question: string): string{
    return this.appService.askQuestion(question);
  }

  @Post('/answer')
  answer(@Body() answerDto: Required<AnswerDto>): AnswerDto{
    return answerDto
  }

  @Get('/sum')
  getSum(
    @Query('num1') a: number,
    @Query('num2') b: number
  ): number {
    return this.sumService.getSum(a,b);
  }
}




