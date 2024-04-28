import { Module } from '@nestjs/common';
import { RentalService } from './rental.service';
import { RentalController } from './rental.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rental, RentalSchema } from './schemas/rental.schemas';
import { UsersModule } from 'src/users/users.module';
import { CarsCategoryModule } from 'src/cars-category/cars-category.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rental.name, schema: RentalSchema }]),
    CarsCategoryModule,
    UsersModule,
  ],
  controllers: [RentalController],
  exports: [RentalService],
  providers: [RentalService],
})
export class RentalModule {}
