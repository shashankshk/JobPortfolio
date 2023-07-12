import React from 'react';
import PropTypes from 'prop-types';
// import Label from '../../../Components/Labels';
// import Image from '../../../Components/Image';
import BlogCard from '../../../Components/BlogCard';
// import './BlogsPreview.scss';

const BlogsPreview = ({ blogs }) => {
  const firstOrderBlog = blogs.find((item) => item.order == 1);
  return (
    <div className='blogs-overview'>
      <div className='pinned-blog'>
        <BlogCard blog={firstOrderBlog} type='pinned' />
      </div>

      <div className='other-blogs'>
        <BlogCard blog={firstOrderBlog} type='generic' />
        <BlogCard blog={firstOrderBlog} type='generic' />
        <BlogCard blog={firstOrderBlog} type='generic' />
      </div>
    </div>
  );
};

BlogsPreview.propTypes = {
  blogs: PropTypes.array,
};

export default BlogsPreview;
