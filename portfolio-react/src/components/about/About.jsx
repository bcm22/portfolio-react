import React from 'react'
import './about.css'
import ME from '../../assets/me.webp'
import { FiAward } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { FaFolder } from "react-icons/fa";

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="about me image"></img>
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward class="about icon" />
              <h5>Experience</h5>
              <small>Kansas Bootcamp Graduate</small>
            </article>
            <article className='about__card'>
              <LuUsers class="client icon" />
              <h5>Clients</h5>
              <small>Family, as of now</small>
            </article>
            <article className='about__card'>
              <FaFolder class="project icon" />
              <h5>Projects</h5>
              <small>Building Portfolio</small>
            </article>
          </div>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias omnis eveniet tempore fugit saepe est molestias excepturi, ipsa, suscipit soluta, cumque ipsam unde iure qui. Ab officiis perferendis suscipit fugit.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
