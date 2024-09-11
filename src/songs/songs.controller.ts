import { Controller, Delete, Get, Put, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create() {
    return this.songsService.create('Animals by Martin Garrix');
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
