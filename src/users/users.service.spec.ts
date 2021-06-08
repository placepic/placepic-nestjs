import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import * as faker from 'faker';

const mockUserRepository = () => ({
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  softDelete: jest.fn(),
});

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('UsersService', () => {
  let service: UsersService;
  let usersRepository: MockRepository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository(),
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    usersRepository = module.get<MockRepository<User>>(
      getRepositoryToken(User),
    );
  });

  describe('User Service', () => {
    describe('create()', () => {
      const createArgs = {
        userName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        certificationNumber: '1234',
        salt: 'hash',
        password: faker.internet.password(),
      };

      test('should fail on exception', async () => {
        usersRepository.save.mockRejectedValue('save error');
        try {
          await service.create(createArgs);
        } catch (error) {
          expect(error).toEqual('save error');
        }
      });

      test('should create Users', async () => {
        usersRepository.save.mockResolvedValue(createArgs);
        const result = await service.create(createArgs);
        expect(usersRepository.save).toHaveBeenCalledTimes(1); // save가 한번 불러졌니?
        expect(usersRepository.save).toHaveBeenCalledWith(createArgs); // 매개변수가 createARgs가 같니?
        expect(result).toEqual(createArgs);
      });
    });
  });
});
