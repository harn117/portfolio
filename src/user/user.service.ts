import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import { OnModuleInit } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto.password);
    createUserDto.password = bcrypt.hashSync(createUserDto.password, parseInt(process.env.SALT));
    console.log(createUserDto.password);
    return this.user.create({ data: createUserDto });
  }

  findAll() {
    return this.user.findMany({ where: { deletedAt: null } });
  }

  findOne(id: string) {
    return this.user.findUnique({ where: { id } });
  }

  findByEmail(email: string) {
    return this.user.findUnique({ where: { email } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.user.update({ where: { id }, data: { ...updateUserDto, password: bcrypt.hashSync(updateUserDto.password, 10) } });
  }

  removeSoft(id: string) {
    return this.user.update({ where: { id }, data: { deletedAt: new Date(), active: false } });
  }

  remove(id: string) {
    //TODO: Validar si el usuario tiene roles de admin
    //this.findOne(id);
    return this.user.delete({ where: { id } });
  }
}
