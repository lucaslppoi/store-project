import { CreateUserDto } from './create-user-dto';

export class UserDto extends CreateUserDto {
  // constructor(name: string, password: string, age: number, email: string) {
  //   super();
  //   this.name = name;
  //   this.password = password;
  //   this.age = age;
  //   this.email = email;
  // }
  constructor(data: any) {
    super();
    this.name = data.username;
    this.age = data.age;
    this.email = data.email;
  }
}
