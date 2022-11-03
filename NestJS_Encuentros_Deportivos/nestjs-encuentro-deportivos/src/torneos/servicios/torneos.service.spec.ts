import { Test, TestingModule } from '@nestjs/testing';
import { TorneosServicios } from './torneos.service';

describe('TorneosService', () => {
  let service: TorneosServicios;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TorneosServicios],
    }).compile();

    service = module.get<TorneosServicios>(TorneosServicios);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
