import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Place } from './places/entities/place.entity';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER_NAME,
      password: process.env.DATABASE_PW,
      database: 'placepic-typeORM',
      charset: 'utf8mb4',
      entities: [User, Place],
      synchronize: true,
    }),
    PlacesModule,
  ], // 이 모듈에 필요한 공급자를 내보내는 가져온 모듈 목록
  controllers: [AppController], // 인스턴스화 되어야 하는 모듈에 정의된 컨트롤러 세트
  providers: [AppService], // Nest 인젝터에 의해 인스턴스화되고 적어도 이 모듈에서 공유될 수 있는 공급자.
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
