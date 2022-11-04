import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Predio } from './entities/predio.entity';
import { CreatePredioInput } from './dto/create-predio.input';

@Injectable()
export class PrediosService {
  constructor(
    @InjectRepository(Predio)
    private predioRepository: Repository<Predio>,
  ) {}
  async create(predio: CreatePredioInput): Promise<Predio> {
    const pred = this.predioRepository.create(predio);
    return this.predioRepository.save(pred);
  }

  async findAll(): Promise<Predio[]> {
    return this.predioRepository.find();
  }

  async findOne(id: string): Promise<Predio> {
    return this.predioRepository.findOne({ where: { id } });
  }

  async update(id: string, updatePredio: CreatePredioInput): Promise<Predio> {
    const predio = await this.predioRepository.preload({
      id: id,
      ...updatePredio,
    });
    if (!predio) {
      throw new NotFoundException(`Predio ${id} not found`);
    }
    return this.predioRepository.save(predio);
  }

  async remove(id: string): Promise<Predio> {
    const predio = await this.findOne(id);
    return this.predioRepository.remove(predio);
  }
}
