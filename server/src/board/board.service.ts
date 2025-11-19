import { PrismaService } from '../../prisma.service.js';

import { Injectable } from '@nestjs/common';

import { CreateBoardInput } from './dto/create-board.input.js';
import { UpdateBoardInput } from './dto/update-board.input.js';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  create(createBoardInput: CreateBoardInput) {
    return this.prisma.board.create({ 
      data: createBoardInput,
    });
  }

  findAll() {
    return this.prisma.board.findMany({
      include: {
        columns: {
          include: {
            cards: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.board.findUnique({
      where: { id },
    });
  }

  update(id: number, updateBoardInput: UpdateBoardInput) {
    return this.prisma.board.update({
      where: { id },
      data: { id: updateBoardInput.id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
