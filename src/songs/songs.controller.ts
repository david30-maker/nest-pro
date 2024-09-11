import {
  Controller,
  Delete,
  Get,
  Put,
  Post,
  Body,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'Fetch one song on the basis of id';
  }

  @Put(':id')
  update() {
    return 'Update song on the basis of id';
  }

  @Delete(':id')
  remove() {
    return 'Delete song on the basis of id';
  }
}
