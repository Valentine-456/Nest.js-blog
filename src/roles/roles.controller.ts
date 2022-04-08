import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@Controller('/roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get('/:role')
  async getRoleById(@Param('role') value: string) {
    const role = await this.rolesService.getRoleByValue(value);
    return role;
  }

  @Post()
  async createRole(@Body() roleDto: CreateRoleDto) {
    const role = await this.rolesService.createRole(roleDto);
    return role;
  }
}
