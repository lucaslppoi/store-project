import { Module } from '@nestjs/common';
import { CarsCategoryService } from './cars-category.service';
import { CarsCategoryController } from './cars-category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CarCategorySchema,
  CarsCategory,
} from './schemas/cars-category.schemas';
import { CarsModule } from 'src/cars/cars.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CarsCategory.name, schema: CarCategorySchema },
    ]),
    CarsModule,
  ],
  controllers: [CarsCategoryController],
  exports: [CarsCategoryService],
  providers: [CarsCategoryService],
})
export class CarsCategoryModule {}
