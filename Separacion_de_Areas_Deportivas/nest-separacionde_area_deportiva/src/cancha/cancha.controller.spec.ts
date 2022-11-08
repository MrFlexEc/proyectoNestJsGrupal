import { Test, TestingModule } from '@nestjs/testing';
import { CanchaController } from './cancha.controller';

describe('CanchaController', () => {
  let controller: CanchaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CanchaController],
    }).compile();

    controller = module.get<CanchaController>(CanchaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
