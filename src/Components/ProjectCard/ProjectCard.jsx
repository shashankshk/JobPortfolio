import React from 'react';
import PropTypes from 'prop-types';
import NormalButton from '../Buttons/NormalButton';
import Image from 'react-graceful-image';
import ProjectCardImagePlaceholder from './ProjectCardImagePlaceholder';
const ProjectCard = ({ project, index, onClick }) => {
  const { title, summary, projectImage } = project;
  return (
    <div className='project-card' key={index}>
      <Image
        src={projectImage.url}
        alt='Project 1'
        className='project-image'
        customPlaceholder={(ref) => <ProjectCardImagePlaceholder refProp={ref} />}
        noLazyLoad
      />
      <div className='project-overview-description'>
        <h3 className='project-title heading-3'>{title}</h3>
        <p className='project-description description'>{summary}</p>
        <NormalButton
          value={'Details'}
          type={'primary'}
          className='project-link'
          onClick={onClick}
        />
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: { name: PropTypes.string, image: PropTypes.string, description: PropTypes.string },
  index: PropTypes.number,
  onClick: PropTypes.func,
};

export default ProjectCard;
