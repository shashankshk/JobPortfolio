import React from 'react';
import PropTypes from 'prop-types';
import BlogCard from '../../../Components/BlogCard';

const BlogsPreview = ({ blogs }) => {
  const firstOrderBlog = blogs.find((item) => item.order == 1);
  return blogs.length ? (
    <div className='home-blogs-section'>
      <h2 className='heading-2'>Blogs</h2>
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
    </div>
  ) : (
    ''
  );
};

BlogsPreview.propTypes = {
  blogs: PropTypes.array,
};

export default BlogsPreview;
