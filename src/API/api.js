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

export const get = async (query, variables) => {
  try {
    const result = await client.query({
      query: query,
      variables: variables,
    });
    return result.data;
  } catch (e) {
    return {
      error: e,
      message: 'Could not load data',
    };
  }
};
