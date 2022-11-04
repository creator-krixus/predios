import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrediosService } from './predios.service';
import { PrediosResolver } from './predios.resolver';
import { Predio } from './entities/predio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Predio])],
  providers: [PrediosResolver, PrediosService],
})
export class PrediosModule {}
