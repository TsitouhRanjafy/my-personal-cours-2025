import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UsersModule],
})
export class AppModule implements NestModule{
  async configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .exclude(
      {path: 'users',method: RequestMethod.GET},
      {path: 'users',method: RequestMethod.POST}
    )
    .forRoutes(UsersController)
  } 
}
