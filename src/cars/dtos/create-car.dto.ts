// import { Base } from "src/common/models/base.entity"

// export class Car extends Base {
//     private releaseYear: number
//     private available: boolean
//     private gasAvailable: boolean

//     constructor({ id, name, releaseYear, available, gasAvailable }) {
//         super({ id, name })

//         this.releaseYear = releaseYear
//         this.available = available
//         this.gasAvailable = gasAvailable

//     }
// }

import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCarDto {
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
