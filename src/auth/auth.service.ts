import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
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
