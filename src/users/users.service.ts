import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  private static readonly logger = new Logger(UsersService.name);
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const result = await this.usersRepository.save(createUserDto);
      UsersService.logger.debug(result);
      return result;
    } catch (error) {
      UsersService.logger.debug(error);
      throw error;
    }
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne<T>(args: T): Promise<User> {
    console.log(args);
    return this.usersRepository.findOne(args);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(userIdx: number): Promise<void> {
    await this.usersRepository.delete(userIdx);
  }
}
