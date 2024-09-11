import { Controller, Delete, Get, Put, Post } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'Create a new song endpoint';
  }

  @Get()
  findAll() {
    return 'Find all songs endpoint';
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
