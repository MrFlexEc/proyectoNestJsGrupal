import { Test, TestingModule } from '@nestjs/testing';
import { DeportistaService } from './deportista.service';

describe('DeportistaService', () => {
  let service: DeportistaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeportistaService],
    }).compile();

    service = module.get<DeportistaService>(DeportistaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
