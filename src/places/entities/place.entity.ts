import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  placeIdx: number;

  @Column({ nullable: false, length: 45 })
  placeName: string;

  @Column({ length: 100 })
  placeAddress: string;

  @Column({ length: 100 })
  placeRoadAddress: string;

  @Column({ nullable: false })
  placeMapX: number;

  @Column({ nullable: false })
  placeMapY: number;

  @Column({ nullable: false })
  placeCreatedAt: number;

  @Column({ nullable: false })
  placeUpdatedAt: number;

  @Column({ nullable: false })
  userIdx: number;

  @Column({ nullable: false })
  placeReview: string;

  @Column({ nullable: false })
  categoryIdx: number;

  @Column({ nullable: false })
  groupIdx: number;

  @Column({ nullable: false, default: 0 })
  placeViews: number;
}
