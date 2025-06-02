import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DonantesService } from './donantes.service';
import { CreateDonanteDto } from './dto/create-donante.dto';
import { UpdateDonanteDto } from './dto/update-donante.dto';
import { Donante } from './entities/donante.entity';

@Controller('donantes')
export class DonantesController {
  constructor(private readonly donantesService: DonantesService) {}

  @Post()
  create(@Body() dto: CreateDonanteDto): Promise<Donante> {
    return this.donantesService.create(dto);
  }

  @Get()
  findAll(): Promise<Donante[]> {
    return this.donantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Donante> {
    return this.donantesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDonanteDto): Promise<Donante> {
    return this.donantesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Donante> {
    return this.donantesService.remove(id);
  }
}
