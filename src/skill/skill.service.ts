import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { PrismaClient } from '@prisma/client';
import { OnModuleInit } from '@nestjs/common';

@Injectable()
export class SkillService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  create(createProfileDto: CreateSkillDto) {
    return this.skill.create({ data: createProfileDto });
  }

  findAll() {
    return this.skill.findMany({where: {deletedAt: null}});
  }

  findOne(id: string) {
    return this.skill.findUnique({ where: { id } });
  }

  update(id: string, updateSkillDto: UpdateSkillDto) {
    return this.skill.update({ where: { id }, data: updateSkillDto });
  }

  removeSoft(id: string) {
    return this.skill.update({ where: { id }, data: { deletedAt: new Date() } });
  }

  remove(id: string) {
    return this.skill.delete({ where: { id } });
  }
}
