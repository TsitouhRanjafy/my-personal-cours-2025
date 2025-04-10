import { Body, Controller, Get, Post, Param, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request,@Res() res: Response){
    console.log(req.headers);
    res.status(200).json({message: 'Hello World!'})
  }

  @Get('/hello/:name')
  sayHello(@Param('name') name: string): string {
    return this.appService.getHello(name);
  }

  @Get('/askquestion')
  askQuestion(@Query('question') question: string): string{
    return `${question}?`
  }

  @Post('/answer')
  answer(@Body() answerDto: AnswerDto): AnswerDto{
    return answerDto
  }
}




