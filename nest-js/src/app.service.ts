import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name: string): string {
    return `Hello ${name}`;
  }

  askQuestion(question: string): string {
    return `${question}?`
  }
}
