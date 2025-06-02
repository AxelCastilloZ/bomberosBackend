import { Injectable, NotFoundException } from '@nestjs/common';
import { Donante } from './entities/donante.entity';
import { CreateDonanteDto } from './dto/create-donante.dto';
import { UpdateDonanteDto } from './dto/update-donante.dto';

@Injectable()
export class DonantesService {
  private donantes: Donante[] = [];

  create(dto: CreateDonanteDto) {
    const nuevo = { ...dto };
    this.donantes.push(nuevo);
    return nuevo;
  }

  findAll() {
    return this.donantes;
  }

  findOne(id: string) {
    const found = this.donantes.find(d => d.id === id);
    if (!found) throw new NotFoundException('Donante no encontrado');
    return found;
  }

  update(id: string, dto: UpdateDonanteDto) {
    const index = this.donantes.findIndex(d => d.id === id);
    if (index === -1) throw new NotFoundException('Donante no encontrado');

    this.donantes[index] = { ...this.donantes[index], ...dto };
    return this.donantes[index];
  }

  remove(id: string) {
    const index = this.donantes.findIndex(d => d.id === id);
    if (index === -1) throw new NotFoundException('Donante no encontrado');
    return this.donantes.splice(index, 1)[0];
  }
}
