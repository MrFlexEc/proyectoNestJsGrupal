import { Test, TestingModule } from '@nestjs/testing';
import { CanchaService } from './cancha.service';

describe('CanchaService', () => {
  let service: CanchaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CanchaService],
    }).compile();

    service = module.get<CanchaService>(CanchaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
