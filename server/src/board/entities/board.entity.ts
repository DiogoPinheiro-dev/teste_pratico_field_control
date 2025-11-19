import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Board {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;
}
