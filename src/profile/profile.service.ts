import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaClient } from '@prisma/client';
import { OnModuleInit } from '@nestjs/common';

@Injectable()
export class ProfileService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  create(createProfileDto: CreateProfileDto) {
    return this.profile.create({ data: createProfileDto });
  }

  findAll() {
    return this.profile.findMany({where: {deletedAt: null}});
  }

  findOne(id: string) {
    return this.profile.findUnique({ where: { id } });
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    return this.profile.update({ where: { id }, data: updateProfileDto });
  }

  removeSoft(id: string) {
    return this.profile.update({ where: { id }, data: { deletedAt: new Date() } });
  }

  remove(id: string) {
    return this.profile.delete({ where: { id } });
  }
}
