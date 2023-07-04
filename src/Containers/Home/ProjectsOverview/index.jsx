import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../../../Components/ProjectCard/ProjectCard';
// import './ProjectsOverview.scss';
import Label from '../../../Components/Labels';

const ProjectsOverview = ({ projects }) => {
  return (
    <div className='projects-overview'>
      <div className='projects-overview-left'>
        <Label value={'Projects'} type={'primary'} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates facilis tempora
          voluptatibus eius numquam impedit at delectus magni maiores cumque est modi, molestiae
          excepturi officia sunt commodi eos illo ipsam?
        </p>
      </div>
      <div className='projects-overview-right'>
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

ProjectsOverview.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

export default ProjectsOverview;
