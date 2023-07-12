import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from '../../../Components/BlogItem';

const BlogsList = ({ blogs }) => {
  return (
    <div className='blogs-list'>
      {blogs.map((blog, index) => {
        return <BlogItem blog={blog} type={'generic'} key={index} />;
      })}
    </div>
  );
};

BlogsList.propTypes = {
  blogs: PropTypes.array,
};

export default BlogsList;
