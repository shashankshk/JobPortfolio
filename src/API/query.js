import { gql } from '@apollo/client';
export const GET_ARTICLES = gql`
  query GetArticles {
    articlesCollection(where: { order_in: [1, 2, 3, 4] }) {
      items {
        title
        coverImage {
          url
        }
        order
        author
        tags
      }
    }
  }
`;
