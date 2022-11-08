import { Test, TestingModule } from '@nestjs/testing';
import { ReservacionController } from './reservacion.controller';

describe('ReservacionController', () => {
  let controller: ReservacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservacionController],
    }).compile();

    controller = module.get<ReservacionController>(ReservacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
