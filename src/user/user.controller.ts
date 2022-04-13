import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  @HttpCode(HttpStatus.OK)
  // getMe(@GetUser('email') user: User) {
  getMe(@GetUser() user: User) {
    return user;
  }
}
