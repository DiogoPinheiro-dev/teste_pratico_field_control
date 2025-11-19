import { gql } from 'apollo-angular';

export const GET_BOARDS = gql`
  query GetBoards {
    boards {
      id
      title
    }
  }
`;