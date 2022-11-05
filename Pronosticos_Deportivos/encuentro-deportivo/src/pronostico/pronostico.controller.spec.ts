import { Test, TestingModule } from '@nestjs/testing';
import { PronosticoController } from './pronostico.controller';

describe('PronosticoController', () => {
  let controller: PronosticoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PronosticoController],
    }).compile();

    controller = module.get<PronosticoController>(PronosticoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
