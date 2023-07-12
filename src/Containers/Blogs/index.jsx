import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../../API/query';
import BlogsList from './BlogsList';

function Blogs() {
  const { loading, data } = useQuery(GET_ARTICLES);
  return (
    <div className='blogs-page'>
      {!loading && <BlogsList blogs={data.articlesCollection.items} />}
    </div>
  );
}

export default Blogs;
