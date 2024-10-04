import { PartialType } from '@nestjs/mapped-types';
import { CreateSoftSkillDto } from './create-soft-skill.dto';

export class UpdateSoftSkillDto extends PartialType(CreateSoftSkillDto) {}
