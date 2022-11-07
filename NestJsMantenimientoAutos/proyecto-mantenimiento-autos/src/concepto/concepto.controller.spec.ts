import { Test, TestingModule } from '@nestjs/testing';
import { ConceptoController } from './concepto.controller';

describe('ConceptoController', () => {
  let controller: ConceptoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConceptoController],
    }).compile();

    controller = module.get<ConceptoController>(ConceptoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
