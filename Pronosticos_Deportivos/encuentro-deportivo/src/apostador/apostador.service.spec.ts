import { Test, TestingModule } from '@nestjs/testing';
import { ApostadorService } from './apostador.service';

describe('ApostadorService', () => {
  let service: ApostadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApostadorService],
    }).compile();

    service = module.get<ApostadorService>(ApostadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
