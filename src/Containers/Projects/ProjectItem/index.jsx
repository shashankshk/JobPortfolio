import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-graceful-image';
const ProjectItem = ({ project, index }) => {
  return (
    <div className={`project-section project-section-s${index + 1}`}>
      <div className='project-detail-section'>
        <h2 className='heading-2'>{project.title}</h2>
        <p className='description'>{project.description}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, a velit quaerat nisi veniam
          at nihil mollitia atque sunt nostrum ducimus qui ab? Nihil omnis, hic a possimus quos
          voluptates!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet corporis sunt
          repudiandae vel iste sed, distinctio eaque earum nulla doloremque voluptates neque qui
          ipsum nobis minus quas soluta fugiat est.
        </p>
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
