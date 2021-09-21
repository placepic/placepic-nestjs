import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { InternalServerErrorException } from '@nestjs/common';

class MockRepository {
  async findOne(userIdx) {
    const user: User = new User();
    user.userIdx = userIdx;
    return user;
  }
}

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: MockRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOneById', async () => {
    it.todo('should return one user who has id in input param', async () => {
      const userIdx = 42;
      const result = await service.findOne(userIdx);
      expect(result.userIdx).toBe(userIdx);
    });
    it.todo(
      'should return InternelServerException when input userId is 1',
      async () => {
        const userIdx = 1;
        await expect(service.findOne(userIdx)).rejects.toThrow(
          InternalServerErrorException,
        );
      },
    );
  });
});
