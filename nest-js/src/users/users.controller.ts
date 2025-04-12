import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    if (!createUserDto.id) throw new BadRequestException()
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    throw new HttpException('Forbidden',HttpStatus.FORBIDDEN)
  }

  @Delete()
  deleteUser(){
    // 
  }
}
