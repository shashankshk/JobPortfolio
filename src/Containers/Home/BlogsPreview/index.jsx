import React from 'react';
import PropTypes from 'prop-types';
// import Label from '../../../Components/Labels';
// import Image from '../../../Components/Image';
import PinnedBlog from '../../../Components/PinnedBlog';
// import './BlogsPreview.scss';

const BlogsPreview = ({ blogs }) => {
  const firstOrderBlog = blogs.find((item) => item.order == 1);
  return (
    <div className='blogs-overview'>
      <div className='pinned-blog'>
        <PinnedBlog blog={firstOrderBlog} />
      </div>
      <div className='other-blogs'></div>
    </div>
  );
};

BlogsPreview.propTypes = {
  blogs: PropTypes.array,
};

export default BlogsPreview;
