import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dtos/create-car.dto';
import { Car } from './schemas/car.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarDto } from './dtos/car.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<Car>) { }

  create(createCarDto: CreateCarDto) {
    this.carModel.create(createCarDto);
  }

  findAll() {
    return `This action returns all cars`;
  }

  async findByID(id: string) {
    const foundCar = await this.carModel.findById(id);
    return new CarDto(foundCar)
  }

  // update(id: string, updateCarDto: UpdateCarDto) {
  //   return;
  // }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
