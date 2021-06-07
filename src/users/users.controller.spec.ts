import { Test, TestingModule } from '@nestjs/testing';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    usersController = module.get<UsersController>(UsersController);
  });

  describe('findAll', () => {
    it('should return an array of ussers', async () => {
      const result: Promise<User[]> = [
        {
          userIdx: 1,
          email: '',
          password: '',
          salt: '',
          userName: '',
          userCreatedAt: 111,
          phoneNumber: '',
          certificationNumber: '',
        },
        {
          userIdx: 2,
          email: 'test@naver.com',
          password: '1234',
          salt: '1234',
          userName: '최영훈',
          userCreatedAt: 111,
          phoneNumber: '01054099859',
          certificationNumber: '1123',
        },
      ];
      jest.spyOn(usersService, 'findAll').mockImplementation(() => result);
      expect(await usersController.findAll()).toBe(result);
    });
  });
});
