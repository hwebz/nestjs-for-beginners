import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { AuthDTO } from './dto';
@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  login() {
    return {
      message: 'Hello Login In',
    };
  }

  async signup(dto: AuthDTO) {
    // generate the password
    const hash = await argon.hash(dto.password);
    // save the new user in the db
    const user = await this.prismaService.user.create({
      data: {
        email: dto.email,
        hash,
      },
      // only allow some specific properties returned instead of return all fields
      // select: {
      //   id: true,
      //   email: true,
      //   createdAt: true,
      // },
    });

    // return the saved user
    return user;
  }
}
