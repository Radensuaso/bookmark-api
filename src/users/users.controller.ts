import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from '../auth/guards';

@Controller('users')
export class UsersController {
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@Req() req: Request) {
    return req.user;
  }
}
