import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placesService.create(createPlaceDto);
  }

  @Get()
  findAll() {
    return this.placesService.findAll();
  }

  @Get(':placeIdx')
  findOne(@Param('placeIdx') placeIdx: string) {
    return this.placesService.findOne(+placeIdx);
  }

  @Patch(':placeIdx')
  update(
    @Param('placeIdx') placeIdx: string,
    @Body() updatePlaceDto: UpdatePlaceDto,
  ) {
    return this.placesService.update(+placeIdx, updatePlaceDto);
  }

  @Delete(':placeIdx')
  remove(@Param('placeIdx') placeIdx: string) {
    return this.placesService.remove(+placeIdx);
  }
}
