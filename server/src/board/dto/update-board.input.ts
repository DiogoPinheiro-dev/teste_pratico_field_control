import { CreateBoardInput } from './create-board.input.js';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBoardInput extends PartialType(CreateBoardInput) {
  @Field(() => Int)
  id: number;
}
