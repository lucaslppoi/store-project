import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dtos/create-user-dto';
import { User } from './schemas/user.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    // vai salvar no banco a senha hasheada
    createUserDto.password = await this.userHash(createUserDto.password);

    this.userModel.create(createUserDto);
  }

  findOne(username: string) {
    const findedUser = this.userModel.findOne({ username: username });
    return findedUser;
  }

  findAll() {
    const findedUsers = this.userModel.find().select('-password');
    return findedUsers;
  }

  private async userHash(pass) {
    const saltOrRounds = 10;
    const hashedPass = await bcrypt.hash(pass, saltOrRounds);
    return hashedPass;
  }
}
