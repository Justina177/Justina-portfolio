import React from 'react';
import './Portfolio.css';
import jus from '../..//assets/just.JPG'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={jus} alt="" />
          </div>
            <h3>This is a portfolio item title </h3>
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribble.com/Alien_pixels" className='btn btn-primary'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
// 2;06