import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DonantesService } from './donantes.service';
import { CreateDonanteDto } from './dto/create-donante.dto';
import { UpdateDonanteDto } from './dto/update-donante.dto';

@Controller('donantes')
export class DonantesController {
  constructor(private readonly donantesService: DonantesService) {}

  @Post()
  create(@Body() dto: CreateDonanteDto) {
    return this.donantesService.create(dto);
  }

  @Get()
  findAll() {
    return this.donantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donantesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDonanteDto) {
    return this.donantesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donantesService.remove(id);
  }
}
