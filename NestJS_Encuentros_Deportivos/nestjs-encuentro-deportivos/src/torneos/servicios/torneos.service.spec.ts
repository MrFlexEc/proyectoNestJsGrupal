import { Test, TestingModule } from '@nestjs/testing';
import { TorneosService } from './torneos.service';

describe('TorneosService', () => {
  let service: TorneosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TorneosService],
    }).compile();

    service = module.get<TorneosService>(TorneosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
