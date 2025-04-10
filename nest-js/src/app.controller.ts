import { Body, Controller, Get, Post, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello/:name')
  getHello(@Param('name') name: string): string {
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
