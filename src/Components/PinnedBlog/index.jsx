import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import Label from '../Labels';

const PinnedBlog = ({ blog }) => {
  const { coverImage, title, author } = blog;
  return (
    <div className='pinned-blog'>
      <Image src={coverImage.url} height={300} />
      <Label value={title} type={'primary'} />
      <Label value={author} type='secondary' />
    </div>
  );
};

PinnedBlog.propTypes = {
  blog: {
    coverImage: {
      url: PropTypes.string,
    },
    title: PropTypes.string,
    author: PropTypes.string,
    tags: PropTypes.array,
  },
};

export default PinnedBlog;
