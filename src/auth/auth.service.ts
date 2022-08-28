import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  singUp() {
    return { msg: 'I have signed up.' };
  }
  singIn() {
    return { msg: 'I have signed in.' };
  }
}
