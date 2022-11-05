import { Test, TestingModule } from '@nestjs/testing';
import { EncuentroDeportivoController } from './encuentro_deportivo.controller';

describe('EncuentroDeportivoController', () => {
  let controller: EncuentroDeportivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncuentroDeportivoController],
    }).compile();

    controller = module.get<EncuentroDeportivoController>(EncuentroDeportivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
