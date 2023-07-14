import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-graceful-image';
import Label from '../Labels';

const BlogCard = ({ blog, type }) => {
  const { coverImage, title, author } = blog;
  const classes = ['blog', type && `blog-${type}`].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <Image src={coverImage.url} width={'100%'} height={'auto'} noLazyLoad />
      <Label value={title} type='primary' />
      <Label value={author} type='secondary' />
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object,
  type: PropTypes.string,
};

export default BlogCard;
