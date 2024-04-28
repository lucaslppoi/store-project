import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CarDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsNumber()
  releaseYear: number;

  @IsBoolean()
  @IsNotEmpty()
  available: boolean;

  @IsBoolean()
  @IsNotEmpty()
  gasAvailable: boolean;

  constructor(data: any) {
    this.name = data.name,
        this.releaseYear = data.releaseYear,
      this.available = data.available,
      this.gasAvailable = data.gasAvailable
  }
}
