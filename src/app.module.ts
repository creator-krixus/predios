import { Module } from '@nestjs/common';
import { PrediosModule } from './predios/predios.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql- schema.gql'),
      // cors: {
      //   origin: 'http://localhost:3002',
      //   credentials: true,
      // },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      port: 5432,
      host: process.env.HOST,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PrediosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
