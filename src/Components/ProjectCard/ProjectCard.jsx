import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Image from '../Image';
import Label from '../Labels';
// import './ProjectCard.scss';

const ProjectCard = ({ project, index }) => {
  const { name, image } = project;
  return (
    <Card type={'info'} className={`project-overview-card project-overview-card-${index}`}>
      <Image src={image} height={150} />
      <Label value={name} type={'primary'} />
      {/* <p>{description}</p> */}
    </Card>
  );
};

ProjectCard.propTypes = {
  project: { name: PropTypes.string, image: PropTypes.string, description: PropTypes.string },
  index: PropTypes.number,
};

export default ProjectCard;
