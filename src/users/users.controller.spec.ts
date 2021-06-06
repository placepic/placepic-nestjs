import { Test, TestingModule } from '@nestjs/testing';
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

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  describe(' find All', () => {
    it('should return an array of user', async () => {
      const result = ['test'];
      jest.spyOn(usersService, 'findAll').mockImplementation(() => result);
      expect(usersController).toBeDefined();
    });
  });
});
