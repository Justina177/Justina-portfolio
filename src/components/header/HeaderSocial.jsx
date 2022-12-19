import React from 'react';
import {
    BsGithub,
    BsLinkedin,
    } from "react-icons/bs";

function HeaderSocial() {
  return (
    <div className='header__socials'>
      <a herf="https://github.com" target="_blank">< BsGithub /></a>
            <a herf="https://linkedin.com" target="_blank"><BsLinkedin /></a>
            <a herf="https://dibble.com" target="_blank"></a>


    </div>
  );
}

export default HeaderSocial