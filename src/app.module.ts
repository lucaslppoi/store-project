import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CarsCategoryModule } from './cars-category/cars-category.module';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { RentalModule } from './rental/rental.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/store-project'),
    AuthModule,
    UsersModule,
    CarsModule,
    CarsCategoryModule,
    UsersModule,
    RentalModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
