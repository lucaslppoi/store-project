import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  MinLength,
  isEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  password: string;

  @IsInt()
  @Max(100)
  age: number;

  @IsEmail()
  email: string;
}
