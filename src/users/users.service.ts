import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.userName = createUserDto.userName;
    user.email = createUserDto.email;
    user.phoneNumber = createUserDto.phoneNumber;
    user.certificationNumber = createUserDto.certificationNumber;
    user.salt = createUserDto.salt;
    user.password = createUserDto.password;
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(userIdx: number): Promise<User> {
    return this.usersRepository.findOne(userIdx);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(userIdx: number): Promise<void> {
    await this.usersRepository.delete(userIdx);
  }
}
