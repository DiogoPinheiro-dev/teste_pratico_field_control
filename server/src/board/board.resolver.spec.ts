import { Test, TestingModule } from '@nestjs/testing';
import { BoardResolver } from './board.resolver.js';
import { BoardService } from './board.service.js';

describe('BoardResolver', () => {
  let resolver: BoardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoardResolver, BoardService],
    }).compile();

    resolver = module.get<BoardResolver>(BoardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
