import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../../../Components/ProjectCard/ProjectCard';
import NormalButton from '../../../Components/Buttons/NormalButton';

const ProjectsOverview = ({ projects }) => {
  return (
    <div className='projects-overview'>
      <h2 className='heading-2'>Projects</h2>
      <div className='projects-showcase'>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </div>
      <div className='more-projects'>
        <NormalButton value={'More Projects'} type={'secondary'} className={'secondary'} />
      </div>
    </div>
  );
};

ProjectsOverview.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

export default ProjectsOverview;
