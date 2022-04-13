import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  login() {
    return {
      message: 'Hello Login In',
    };
  }

  signup() {
    return {
      message: 'Hello Sign Up',
    };
  }
}
