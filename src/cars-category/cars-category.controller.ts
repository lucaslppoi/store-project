import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarsCategoryService } from './cars-category.service';
import { CreateCarsCategoryDto } from './dto/create-cars-category.dto';

@Controller('cars-category')
export class CarsCategoryController {
  constructor(private readonly carsCategoryService: CarsCategoryService) { }

  @Post()
  createCategory(@Body() createCategoryDto: CreateCarsCategoryDto) {
    return this.carsCategoryService.createCategory(createCategoryDto);
  }

  @Get('/get-car/:category')
  getCarByCategory(@Param('category') category: string) {
    return this.carsCategoryService.getCarByCategory(category);
  }
}
