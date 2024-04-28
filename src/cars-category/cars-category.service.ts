import { Injectable, Inject } from '@nestjs/common';
import { CreateCarsCategoryDto } from './dto/create-cars-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarsCategory } from './schemas/cars-category.schemas';
import { CarsService } from '../cars/cars.service';
import { RentACarDto } from './dto/rent-a-car.dto';
import { CarDto } from 'src/cars/dtos/car.dto';

@Injectable()
export class CarsCategoryService {
  @InjectModel(CarsCategory.name)
  private carCategoryModel: Model<CarsCategory>;
  @Inject(CarsService)
  private readonly carService: CarsService;

  createCategory(createCategoryDto: CreateCarsCategoryDto) {
    this.carCategoryModel.create(createCategoryDto);
  }

  async getCategory(category: string) {
    return await this.carCategoryModel.findOne({
      name: category,
    });
  }

  async getCarByCategory(category: string) {
    const foundCategory = await this.carCategoryModel.findOne({
      name: category,
    });

    if (foundCategory != null && foundCategory.carIDs.length > 0) {
      for (const id of foundCategory.carIDs) {
        const carFound = await this.carService.findByID(id);
        if (carFound.available) {
          return carFound;
        }
      }
    }

    throw new Error();
  }

  async rentACar(rentCarDto: RentACarDto) {
    const carCategory = await this.carCategoryModel.findOne({
      name: rentCarDto.category,
    });
    const totalValue = carCategory.price * 1.3 * rentCarDto.days;

    return 'R$ ' + totalValue;
  }
}
