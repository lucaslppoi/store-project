import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<CarsCategory>;

@Schema({ timestamps: true })
export class CarsCategory {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  carIDs: string[];

  @Prop({ required: true })
  price: number;
}

export const CarCategorySchema = SchemaFactory.createForClass(CarsCategory);
