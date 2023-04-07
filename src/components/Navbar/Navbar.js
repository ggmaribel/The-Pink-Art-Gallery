import React from 'react';
import { images } from '../../constants';
import './Navbar.css';

const Navbar = () => (
  <div className='navbar'>
    <div className='logo'>
      <a href='/'>
        <img src={images.logo} alt="logo" />
      </a>
    </div>
  </div>
);

export default Navbar;