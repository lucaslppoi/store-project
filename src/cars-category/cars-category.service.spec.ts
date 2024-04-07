import { Test, TestingModule } from '@nestjs/testing';
import { CarsCategoryService } from './cars-category.service';

describe('CarsCategoryService', () => {
  let service: CarsCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsCategoryService],
    }).compile();

    service = module.get<CarsCategoryService>(CarsCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
