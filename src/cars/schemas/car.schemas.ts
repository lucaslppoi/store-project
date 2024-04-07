import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema({ timestamps: true })
export class Car {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  releaseYear: number;

  @Prop({ required: true })
  available: boolean;

  @Prop({ required: true })
  gasAvailable: boolean;
}

export const CarSchema = SchemaFactory.createForClass(Car);
