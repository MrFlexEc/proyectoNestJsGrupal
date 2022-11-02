import { Test, TestingModule } from '@nestjs/testing';
import { EquiposServicios } from './equipos.service';

describe('EquiposService', () => {
  let service: EquiposServicios;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EquiposServicios],
    }).compile();

    service = module.get<EquiposServicios>(EquiposServicios);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
