import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../../../Components/ProjectCard/ProjectCard';
import NormalButton from '../../../Components/Buttons/NormalButton';
import { GET_PROJECTS_INTRO } from '../../../API/query';
import { get } from '../../../API/api';
import { useNavigate } from 'react-router-dom';
import PageLoader from '../../../Components/PageLoader';

const ProjectsOverview = () => {
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    get(GET_PROJECTS_INTRO).then((response) => {
      const result = [...response.projectsCollection.items].sort((a, b) => a.order - b.order);
      setProjectsData(result);
    });
  }, []);
  const navigate = useNavigate();

  return (
    <>
      {projectsData.length ? (
        <div className='projects-overview'>
          <h2 className='heading-2'>Projects</h2>
          <div className='projects-showcase'>
            {projectsData.map((project, index) => (
              <ProjectCard
                project={project}
                key={index}
                index={index}
                onClick={() => navigate(`/projects/${project.sys.id}`)}
              />
            ))}
          </div>
          <div className='more-projects'>
            <NormalButton
              value={'More Projects'}
              type={'secondary'}
              className={'secondary'}
              onClick={() => navigate('/projects')}
            />
          </div>
        </div>
      ) : (
        <PageLoader />
      )}
    </>
  );
};

ProjectsOverview.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};

export default ProjectsOverview;
