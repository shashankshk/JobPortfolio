import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../../API/query';
import ContentfulRichText from '../../Components/ContentfulRichText';
import Image from 'react-graceful-image';
import AnimationProvider from '../../Components/AnimatedComponent';

const ProjectDetail = () => {
  let params = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id: params.projectId } });
  return (
    <div className='blog-content'>
      {!loading && !error && (
        <AnimationProvider>
          <h1 className='heading-1 heading-1-title'>{data.projects.title}</h1>
          <Image src={data.projects.projectImage.url} width={'100%'} />
          <ContentfulRichText
            document={data.projects.description.json}
            links={data.projects.description.links}
          />
        </AnimationProvider>
      )}
    </div>
  );
};

export default ProjectDetail;
