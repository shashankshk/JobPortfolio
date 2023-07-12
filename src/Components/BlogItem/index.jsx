import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-graceful-image';
import Label from '../Labels';
import { useNavigate } from 'react-router-dom';

const BlogItem = ({ blog }) => {
  const { coverImage, title, author, sys, summary } = blog;
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/blog/${sys.id}`);
  };
  return (
    <div className='blog-item' onClick={handleNavigation}>
      <div className='blog-description'>
        <h2 className='heading-2'>{title}</h2>
        <Label value={author} type={'secondary'} italic />
        <p className='description'>{summary}</p>
      </div>
      <div className='blog-cover-image'>
        <Image src={coverImage.url} className='blog-item-image' />
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  blog: {
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    summary: PropTypes.string,
  },
};

export default BlogItem;
