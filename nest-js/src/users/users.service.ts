import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private user: CreateUserDto[] = [];
  create(createUserDto: CreateUserDto) {
    this.user.push(createUserDto);
    return createUserDto;
  }

  findAll() {
    return this.user;
  }

  delete(id:number){
    return new Promise((resolve,reject) => {
      resolve('This method Not Implementhed')
    })
  }
}
