import { Module } from '@nestjs/common';
import { DonantesService } from './donantes.service';
import { DonantesController } from './donantes.controller';

@Module({
  controllers: [DonantesController],
  providers: [DonantesService],
})
export class DonantesModule {}
