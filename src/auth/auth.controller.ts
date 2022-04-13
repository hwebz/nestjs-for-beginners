import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(
    @Body('email') email: string,
    @Body('password', ParseIntPipe) password: string,
  ) {
    console.log({
      email,
      typeofEmail: typeof email,
      password,
      typeofPassword: typeof password,
    });
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.login();
  }
}
