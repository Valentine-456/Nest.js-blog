import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Retrieving all users in the system' })
  @ApiResponse({ status: 200, type: User })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }

  @ApiOperation({ summary: 'Creating a new user' })
  @ApiResponse({ status: 201, type: [User] })
  @Post()
  async createUser(@Body() userDTO: CreateUserDto) {
    return await this.userService.createUser(userDTO);
  }

  @ApiOperation({ summary: 'Getting role' })
  @ApiResponse({ status: 200 })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/role')
  async getRole(@Body() dto: AddRoleDto) {
    return await this.userService.getRole(dto);
  }

  @ApiOperation({ summary: 'Ban user' })
  @ApiResponse({ status: 200 })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/ban')
  async banUser(@Body() dto: BanUserDto) {
    return await this.userService.banUser(dto);
  }
}
