import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import './MenuItem.scss';

const MenuItem = ({ link, label }) => {
  return (
    <div className='menu-item'>
      <NavLink
        to={link}
        className={({ isActive, isPending }) =>
          isPending ? 'nav-link menu-pending' : isActive ? 'nav-link menu-active' : 'nav-link'
        }
      >
        {label}
      </NavLink>
    </div>
  );
};

MenuItem.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
};

export default MenuItem;
