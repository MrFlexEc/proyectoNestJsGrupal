import { Test, TestingModule } from '@nestjs/testing';
import { ReservacionService } from './reservacion.service';

describe('ReservacionService', () => {
  let service: ReservacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservacionService],
    }).compile();

    service = module.get<ReservacionService>(ReservacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
