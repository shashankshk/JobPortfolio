import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ARTICLE } from '../../API/query';
import ContentfulRichText from '../../Components/ContentfulRichText';
import Image from 'react-graceful-image';
import Label from '../../Components/Labels';
const BlogReader = () => {
  let params = useParams();
  const { loading, error, data } = useQuery(GET_ARTICLE, { variables: { id: params.blogId } });

  return (
    <div className='blog-content'>
      {!loading && !error && (
        <>
          <h1 className='heading-1 heading-1-title'>{data.articles.title}</h1>
          <Label value={data.articles.author} type='secondary' italic />
          <Image src={data.articles.coverImage.url} width={'100%'} />
          <ContentfulRichText document={data.articles.content.json} />
        </>
      )}
    </div>
  );
};

export default BlogReader;
