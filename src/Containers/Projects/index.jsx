import React, { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';
import { GET_PROJECTS } from '../../API/query';
import { get } from '../../API/api';
import PageLoader from '../../Components/PageLoader';
import AnimationProvider from '../../Components/AnimatedComponent';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    get(GET_PROJECTS).then((response) => {
      console.log(response);
      const result = [...response.projectsCollection.items].sort((a, b) => a.order - b.order);
      setProjectsData(result);
    });
  }, []);

  return projectsData.length ? (
    <AnimationProvider>
      <div className='projects-page'>
        {projectsData.map((project, index) => (
          <ProjectItem project={project} key={index} index={index} />
        ))}
      </div>
    </AnimationProvider>
  ) : (
    <PageLoader />
  );
};

export default Projects;
