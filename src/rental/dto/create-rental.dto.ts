import { CarDto } from 'src/cars/dtos/car.dto';
import { UserDto } from 'src/users/dtos/user.dto';

export class CreateRentalDto {
  client: UserDto;
  car: CarDto;
  price: number;
  rentalPeriod: number;
  rentalDate: Date;
  rentalReturn: Date;

  constructor(client: any, car: CarDto, price: number, rentalPeriod: number, rentalDate: Date, rentalReturn: Date) {
    this.client = client;
    this.car = car;
    this.price = price;
    this.rentalPeriod = rentalPeriod;
    this.rentalDate = rentalDate;
    this.rentalReturn = rentalReturn;
  }
}
