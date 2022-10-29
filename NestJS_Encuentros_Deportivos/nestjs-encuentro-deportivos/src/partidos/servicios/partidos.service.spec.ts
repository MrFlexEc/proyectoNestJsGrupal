import { Test, TestingModule } from '@nestjs/testing';
import { PartidosService } from './partidos.service';

describe('PartidosService', () => {
  let service: PartidosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartidosService],
    }).compile();

    service = module.get<PartidosService>(PartidosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
