import { Test, TestingModule } from '@nestjs/testing';
import { DeportistaController } from './deportista.controller';

describe('DeportistaController', () => {
  let controller: DeportistaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeportistaController],
    }).compile();

    controller = module.get<DeportistaController>(DeportistaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
