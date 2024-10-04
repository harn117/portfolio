import { Test, TestingModule } from '@nestjs/testing';
import { SoftSkillController } from './soft-skill.controller';
import { SoftSkillService } from './soft-skill.service';

describe('SoftSkillController', () => {
  let controller: SoftSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoftSkillController],
      providers: [SoftSkillService],
    }).compile();

    controller = module.get<SoftSkillController>(SoftSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
