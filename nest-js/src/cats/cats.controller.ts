import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get('all')
    findAll(): string {
        return 'This action return all cats'
    }
}
