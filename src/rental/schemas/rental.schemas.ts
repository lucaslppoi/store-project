import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Car } from 'src/cars/schemas/car.schemas';
import { User } from 'src/users/schemas/user.schemas';

export type RentalDocument = HydratedDocument<Rental>;

@Schema({ timestamps: true })
export class Rental {
  @Prop({ required: true })
  client: User;

  @Prop({ required: true })
  car: Car;

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ required: true })
  rentalPeriod: number;

  @Prop({ required: true })
  rentalDate: Date;

  @Prop({ required: true })
  rentalReturn: Date;
}

export const RentalSchema = SchemaFactory.createForClass(Rental);
