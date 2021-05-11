import { Entity, Column, PrimaryGeneratedColumn } from 'typeORM';
import dayjs from 'dayjs';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userIdx: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ length: 200, nullable: false })
  password: string;

  @Column({ length: 200, nullable: false })
  salt: string;

  @Column({ length: 45, nullable: false })
  userName: string;

  @Column({ default: 111 })
  userCreatedAt: number;

  @Column({ length: 45, nullable: false })
  phoneNumber: string;

  @Column({ length: 45, default: '1234' })
  certificationNumber: string;
}
