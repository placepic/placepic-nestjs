import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeORM';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userIdx: number;

  @Column({ length: 200 })
  salt: string;

  @Column({ length: 45 })
  userName: string;

  @Column()
  @CreateDateColumn()
  userCreatedAt: number;

  @Column({ length: 45 })
  phoneNumber: string;

  @Column({ length: 45 })
  certificationNumber: string;
}
