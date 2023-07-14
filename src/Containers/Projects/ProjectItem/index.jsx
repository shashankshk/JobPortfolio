import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-graceful-image';
import NormalButton from '../../../Components/Buttons/NormalButton';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../Components/Icons/Icon';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const ProjectItem = ({ project, index }) => {
  const { title, sys, summary, projectImage, projectLink } = project;
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/projects/${sys.id}`);
  };
  return (
    <div className={`project-section project-section-s${index + 1}`}>
      <div className='project-detail-section'>
        <h2 className='heading-2'>{title}</h2>
        <p className='description'>{summary}</p>
        <div className='buttons-group'>
          <NormalButton
            value={'View Detail'}
            onClick={handleNavigation}
            type={'primary'}
            className={'primary'}
          />
          <NormalButton
            value={'Link'}
            type={'secondary'}
            className={'secondary'}
            onClick={() => window.open(projectLink)}
          >
            <Icon type={faArrowUpRightFromSquare} />
          </NormalButton>
        </div>
      </div>
      <div className='project-image-section'>
        <Image src={projectImage?.url} className='project-image' />
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  index: PropTypes.number,
  project: PropTypes.object,
};

export default ProjectItem;
