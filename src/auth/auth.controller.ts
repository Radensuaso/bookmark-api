import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('signUp')
  signUp(@Body() dto: AuthDto) {
    return this.auth.singUp(dto);
  }

  @Post('signIn')
  signIn(@Body() dto: AuthDto) {
    return this.auth.singIn(dto);
  }
}
