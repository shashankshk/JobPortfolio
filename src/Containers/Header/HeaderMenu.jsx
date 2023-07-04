import React from 'react';
// import './HeaderMenu.scss';
import { headerMenuItems } from '../../utils/constants';
import MenuItem from '../../Components/MenuItem';

const HeaderMenu = () => {
  return (
    <div className='header-menu'>
      {headerMenuItems.map((item, index) => (
        <MenuItem link={item.link} label={item.label} key={index} />
      ))}
    </div>
  );
};

export default HeaderMenu;
