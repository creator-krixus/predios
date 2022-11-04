import { InputType, Int, Field } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class CreatePredioInput {
  @Field(() => String, { description: 'id of the user' })
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field(() => Int)
  avaluo: number;
  @Field()
  nombre: string;
  @Field()
  departamento: string;
  @Field()
  municipio: string;
}
