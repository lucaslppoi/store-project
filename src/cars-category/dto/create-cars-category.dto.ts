import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCarsCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  carIDs: string[];

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsBoolean()
  @IsNotEmpty()
  gasAvailable: boolean;
}
