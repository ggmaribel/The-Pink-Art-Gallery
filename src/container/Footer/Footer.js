import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='footer'>
    <div className='logo'>
      <a href='/'>
        <img src={images.logo} alt="logo" />
      </a>
    </div>
    <div class="social-links">
      <a href="https://twitter.com/ggMaribel_" target="_blank" rel="noreferrer">
        <BsTwitter/>
      </a>
      <a href="https://github.com/ggmaribel" target="_blank" rel="noreferrer">
        <BsGithub/>
      </a>
      <a href="https://www.linkedin.com/in/maribel-gallegos/" target="_blank" rel="noreferrer">
        <BsLinkedin/>
      </a>
    </div>
    <div class="copy">
      <p>&copy; Copyright All rights reserved </p>
    </div>
  </div>
);

export default Footer;