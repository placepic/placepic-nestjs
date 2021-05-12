import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Repository } from 'typeorm';
import { Place } from './entities/place.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private placeRepository: Repository<Place>,
  ) {}
  create(createPlaceDto: CreatePlaceDto) {
    return 'This action adds a new place';
  }

  findAll() {
    return `This action returns all places`;
  }

  findOne(id: number) {
    return `This action returns a #${id} place`;
  }

  update(id: number, updatePlaceDto: UpdatePlaceDto) {
    return `This action updates a #${id} place`;
  }

  remove(id: number) {
    return `This action removes a #${id} place`;
  }
}
