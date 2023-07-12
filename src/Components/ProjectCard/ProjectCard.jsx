import React from 'react';
import PropTypes from 'prop-types';
import NormalButton from '../Buttons/NormalButton';

const ProjectCard = ({ project, index }) => {
  const { name, image } = project;
  return (
    <div className='project-card' key={index}>
      <img src={image} alt='Project 1' className='project-image' />
      <h3 className='project-title'>{name}</h3>
      <p className='project-description'>Brief description of the project.</p>
      <NormalButton value={'Details'} type={'primary'} className='project-link' />
    </div>
  );
};

ProjectCard.propTypes = {
  project: { name: PropTypes.string, image: PropTypes.string, description: PropTypes.string },
  index: PropTypes.number,
};

export default ProjectCard;
