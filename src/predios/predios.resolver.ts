import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PrediosService } from './predios.service';
import { Predio } from './entities/predio.entity';
import { CreatePredioInput } from './dto/create-predio.input';
// import { UpdatePredioInput } from './dto/update-predio.input';

@Resolver(() => Predio)
export class PrediosResolver {
  constructor(private prediosService: PrediosService) {}
  @Mutation(() => Predio)
  createPredio(
    @Args('createPredioInput') createPredioInput: CreatePredioInput,
  ) {
    return this.prediosService.create(createPredioInput);
  }
  @Query(() => [Predio], { name: 'GetPredios' })
  findAll() {
    return this.prediosService.findAll();
  }
  @Query(() => Predio, { name: 'GetPredio' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.prediosService.findOne(id);
  }
  @Mutation(() => Predio)
  updatePredio(@Args('updatePredioInput') updatePredio: CreatePredioInput) {
    return this.prediosService.update(updatePredio.id, updatePredio);
  }

  @Mutation(() => Predio)
  removePredio(@Args('id', { type: () => String }) id: string) {
    return this.prediosService.remove(id);
  }
}
