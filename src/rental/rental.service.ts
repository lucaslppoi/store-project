import { Inject, Injectable } from '@nestjs/common';
import { RequestRentalDto } from './dto/request-rental.dto';
import { UsersService } from 'src/users/users.service';
import { CarsCategoryService } from 'src/cars-category/cars-category.service';
import { InjectModel } from '@nestjs/mongoose';
import { Rental } from './schemas/rental.schemas';
import { Model } from 'mongoose';
import { CreateRentalDto } from './dto/create-rental.dto';

@Injectable()
export class RentalService {
  @InjectModel(Rental.name)
  private rentalModel: Model<Rental>;
  @Inject(UsersService)
  private readonly usersService: UsersService;
  @Inject(CarsCategoryService)
  private readonly carsCategoryService: CarsCategoryService;

  async create(rentalDataDto: RequestRentalDto, requesterID: string) {
    const userData = await this.usersService.findByID(requesterID);
    const carData = await this.carsCategoryService.getCarByCategory(
      rentalDataDto.category,
    );
    const categoryData = await this.carsCategoryService.getCategory(rentalDataDto.category)

    const rentalDate = new Date()
    const calculateDate = new Date(rentalDate);
    calculateDate.setDate(calculateDate.getDate() + rentalDataDto.rentalTime)

    const rent: CreateRentalDto = {
      client: userData,
      car: carData,
      price: categoryData.price,
      rentalPeriod: rentalDataDto.rentalTime,
      rentalDate: rentalDate,
      rentalReturn: calculateDate,
    };
    return rent;
  }
}
