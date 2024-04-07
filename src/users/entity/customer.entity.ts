import { Base } from 'src/common/models/base.entity';

export class Customer extends Base {
  private age: number;
  constructor({ id, name, age }) {
    super({ id, name });

    this.age = age;
  }
}
