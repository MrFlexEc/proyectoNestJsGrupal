import { Test, TestingModule } from '@nestjs/testing';
import { MantenimientoService } from './mantenimiento.service';

describe('MantenimientoService', () => {
  let service: MantenimientoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MantenimientoService],
    }).compile();

    service = module.get<MantenimientoService>(MantenimientoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
