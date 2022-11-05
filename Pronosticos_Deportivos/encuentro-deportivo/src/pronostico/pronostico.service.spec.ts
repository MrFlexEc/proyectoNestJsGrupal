import { Test, TestingModule } from '@nestjs/testing';
import { PronosticoService } from './pronostico.service';

describe('PronosticoService', () => {
  let service: PronosticoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PronosticoService],
    }).compile();

    service = module.get<PronosticoService>(PronosticoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
