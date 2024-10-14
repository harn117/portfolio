import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UserService
  ) {}

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user:any = await this.usersService.findByEmail(email);
    if (!user || (bcrypt.compareSync(pass, user?.password) === false)) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.name, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
