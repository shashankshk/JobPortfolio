import React from 'react';
// import ShadowWrapper from '../../Components/ShadowWrapper';
// import PropTypes from 'prop-types';
// import personal from '../../Assets/images/Self.jpg';
// import './Home.scss';
// import Image from '../../Components/Image';
import Intro from './Intro/Intro';
import ProjectsOverview from './ProjectsOverview';
import { projects } from './homeData';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES } from '../../API/query';
import BlogsPreview from './BlogsPreview';

const Home = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES);
  console.log(loading, error, data);
  return (
    <div className='home-container'>
      <Intro />
      <ProjectsOverview projects={projects} />
      {!loading && <BlogsPreview blogs={data.articlesCollection.items} />}
    </div>
  );
};

// Home.propTypes = {};

export default Home;
