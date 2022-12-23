import React from 'react'
import './About.css'
import Me from '../../assets/just.JPG'
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get TO Know</h5>
      <h2> About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_image">
            <img src={Me}  alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>5+ Clients</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quis non sit neque! Nobis aliquam fuga vel nihil voluptatem 
            voluptas laudantium perferendis eligendi totam, quia atque 
            sint obcaecati porro numquam nulla.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About