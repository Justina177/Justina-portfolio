import React from 'react';
import CTA from './CTA';
import './Header.css';
import just from '../../assets/js1-removebg-preview.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Justina Enenche</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={just} alt="Justina" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll down</a>
      </div>
      
    </header>
  )
}

export default Header