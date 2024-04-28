import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { RentalService } from './rental.service';
import { RequestRentalDto } from './dto/request-rental.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('rental')
export class RentalController {
  constructor(private readonly rentalService: RentalService) { }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() rentalDataDto: RequestRentalDto, @Req() req: any) {
    return this.rentalService.create(rentalDataDto, req.user.sub);
  }
}
