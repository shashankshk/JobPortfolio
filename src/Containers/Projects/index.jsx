import React from 'react';
import { projects } from '../Home/homeData';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import Image from 'react-graceful-image';

const Projects = () => {
  return (
    <div className='projects-page'>
      <div className='project-section project-section-s1'>
        <div className='project-detail-section'>
          <h2 className='heading-2'>Project Title</h2>
          <p className='description'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nihil delectus
            pariatur quo, nobis, molestiae reprehenderit ab porro hic facilis sed perspiciatis
            suscipit in repellat velit, vero odio esse ea!
          </p>
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
          <Image src={projects[0].image} />
        </div>
      </div>
      <div className='project-section project-section-s2'>
        <div className='project-detail-section'>
          <h2 className='heading-2'>Project Title</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nihil delectus
            pariatur quo, nobis, molestiae reprehenderit ab porro hic facilis sed perspiciatis
            suscipit in repellat velit, vero odio esse ea!
          </p>
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
          <Image src={projects[0].image} />
        </div>
      </div>
      {/* {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))} */}
    </div>
  );
};

export default Projects;
