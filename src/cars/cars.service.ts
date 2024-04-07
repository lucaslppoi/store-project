import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dtos/create-car.dto';
import { Car } from './schemas/car.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<Car>) { }

  create(createCarDto: CreateCarDto) {
    return this.carModel.create(CreateCarDto)
  }

  findAll() {
    return `This action returns all cars`;
  }

  findOne(id: string) {
    return `This action returns a #${id} car`;
  }

  // update(id: number, updateCarDto: UpdateCarDto) {
  //   return `This action updates a #${id} car`;
  // }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
