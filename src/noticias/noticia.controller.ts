import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { NoticiaService } from './noticia.service';
import { CreateNoticiaDto } from './dto/create-noticia.dto';
import { UpdateNoticiaDto } from './dto/update-noticia.dto';

@Controller('noticias')
export class NoticiaController {
  constructor(private readonly noticiaService: NoticiaService) {}

  @Post()
  create(@Body() dto: CreateNoticiaDto) {
    return this.noticiaService.create(dto);
  }

  @Get()
  findAll() {
    return this.noticiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noticiaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateNoticiaDto) {
    return this.noticiaService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.noticiaService.delete(id);
  }
}
