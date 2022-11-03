import { Test, TestingModule } from '@nestjs/testing';
import { PartidosServicios } from './partidos.service';

describe('PartidosService', () => {
  let service: PartidosServicios;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartidosServicios],
    }).compile();

    service = module.get<PartidosServicios>(PartidosServicios);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
