import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() dto: CreateUserDto) {
    return await this.authService.login(dto);
  }

  @Post('/register')
  async register(@Body() dto: CreateUserDto) {
    return await this.authService.register(dto);
  }
}
