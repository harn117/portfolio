import { Test, TestingModule } from '@nestjs/testing';
import { SoftSkillService } from './soft-skill.service';

describe('SoftSkillService', () => {
  let service: SoftSkillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoftSkillService],
    }).compile();

    service = module.get<SoftSkillService>(SoftSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
