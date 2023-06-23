import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({ link, label }) => {
  return (
    <div className='menu-item'>
      <Link to={link}>{label}</Link>
    </div>
  );
};

MenuItem.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
};

export default MenuItem;
