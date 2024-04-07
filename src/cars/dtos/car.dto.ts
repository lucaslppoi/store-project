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
}
