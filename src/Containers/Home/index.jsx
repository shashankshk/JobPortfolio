import React from 'react';
import Intro from './Intro/Intro';
import ProjectsOverview from './ProjectsOverview';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES_INTRO } from '../../API/query';
import BlogsPreview from './BlogsPreview';
import AnimationProvider from '../../Components/AnimatedComponent';

const Home = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES_INTRO);
  return (
    <AnimationProvider>
      <div className='home-container'>
        <Intro />
        <ProjectsOverview />
        {!loading && !error && <BlogsPreview blogs={data.articlesCollection.items} />}
      </div>
    </AnimationProvider>
  );
};

export default Home;
