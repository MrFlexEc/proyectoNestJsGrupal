import { Test, TestingModule } from '@nestjs/testing';
import { EncuentroDeportivoService } from './encuentro_deportivo.service';

describe('EncuentroDeportivoService', () => {
  let service: EncuentroDeportivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncuentroDeportivoService],
    }).compile();

    service = module.get<EncuentroDeportivoService>(EncuentroDeportivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
