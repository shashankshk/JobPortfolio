import { ApolloClient, InMemoryCache } from '@apollo/client';
const baseGraphqlURL = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`;

export const client = new ApolloClient({
  uri: baseGraphqlURL,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.CONTENT_DELIVERY_API}`,
  },
});

export const get = (query) => {
  client.query({
    query: query,
  });
};
