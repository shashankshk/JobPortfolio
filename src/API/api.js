import { ApolloClient, InMemoryCache } from '@apollo/client';
console.log(process.env.SPACE_ID, 'env variables');
const baseGraphqlURL = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`;

export const client = new ApolloClient({
  uri: baseGraphqlURL,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.CONTENT_DELIVERY_API}`,
  },
});

export const get = (query, variables) => {
  client.query({
    query: query,
    variables: variables,
  });
};
