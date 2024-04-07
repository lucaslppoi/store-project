import { Test, TestingModule } from '@nestjs/testing';
import { CarsCategoryController } from './cars-category.controller';
import { CarsCategoryService } from './cars-category.service';

describe('CarsCategoryController', () => {
  let controller: CarsCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsCategoryController],
      providers: [CarsCategoryService],
    }).compile();

    controller = module.get<CarsCategoryController>(CarsCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
