import { Injectable, Inject } from '@nestjs/common';
import { CreateCarsCategoryDto } from './dto/create-cars-category.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CarsCategory } from "./schemas/cars-category.schemas";
import { CarsService } from "../cars/cars.service";

@Injectable()
export class CarsCategoryService {
  // constructor(
  //   @InjectModel(CarsCategory.name)
  //   private carCategoryModel: Model<CarsCategory>,
  //   @Inject(CarsService)
  //   private readonly carService: CarsService,
  // ) { }
  @InjectModel(CarsCategory.name)
  private carCategoryModel: Model<CarsCategory>
  @Inject(CarsService)
  private readonly carService: CarsService

  createCategory(createCategoryDto: CreateCarsCategoryDto) {
    return this.carCategoryModel.create(CreateCarsCategoryDto)
  }

  async getCarByCategory(category: string) {
    const foundCategory = await this.carCategoryModel.findOne({
      name: category,
    });
    if (foundCategory && foundCategory.carIDs.length > 0) {
      return this.carService.findOne(foundCategory.carIDs[Math.floor(Math.random() * foundCategory.carIDs.length)]);
    };

    return "Not found"
  }
}

