import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../../API/query';
import BlogsList from './BlogsList';
import PageLoader from '../../Components/PageLoader';

function Blogs() {
  const { loading, error, data } = useQuery(GET_ARTICLES);
  return !loading && !error ? (
    <div className='blogs-page'>
      {data.articlesCollection.items.length ? (
        <BlogsList blogs={data.articlesCollection.items} />
      ) : (
        <PageLoader>
          <h2 className='heading-2'>Cooking exciting content for you...</h2>
        </PageLoader>
      )}
    </div>
  ) : (
    <PageLoader />
  );
}

export default Blogs;
