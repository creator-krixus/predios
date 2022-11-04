import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class Predio {
  @Field(() => String, { description: 'id of the property' })
  @Column()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field(() => Int)
  @Column()
  avaluo: number;
  @Field()
  @Column()
  nombre: string;
  @Field()
  @Column()
  departamento: string;
  @Field()
  @Column()
  municipio: string;
}
