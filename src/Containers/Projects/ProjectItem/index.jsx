import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-graceful-image';
const ProjectItem = ({ project, index }) => {
  return (
    <div className={`project-section project-section-s${index + 1}`}>
      <div className='project-detail-section'>
        <h2 className='heading-2'>{project.title}</h2>
        <p className='description'>{project.description}</p>
      </div>
      <div className='project-image-section'>
        <Image src={project.image} className='project-image' />
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  index: PropTypes.number,
  project: PropTypes.object,
};

export default ProjectItem;
