import React from 'react'
import './about.css'
import ME from '../../assets/ME.jpg'
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

          <p>I’ve often heard if you want to really know somebody, ask the person
                        closest to them. So, here is an
                        “About Me” section explained by my wife.

                        My name is Brian Monda. I live in Central Missouri with my wife and two boys. On any random day,
                        you
                        will find me outside either chasing my 3 year old (who is likely half-way dressed) or playing
                        basketball
                        with my oldest. I am an outgoing introvert. I love to be around my family and friends, but to
                        recharge
                        my batteries, I prefer to be at home, in my chair, listening to my audio book. For all my
                        personality
                        test lovers: I am an Enneagram 9 (if you don’t know what this is, ask my wife) and an INTP on
                        Myers
                        Briggs.

                        Professionally, I have worked in different settings. From account management for John Deere
                        equipment to
                        home loans, but my passion has always been what you will find here: Figuring out the inner
                        dialogue to
                        make what you see on this screen or simply put, programming.

                        So in summary, I am a dad, husband, an introverted techy that is just chasing his dream to have
                        a career
                        that I am passionate about. My portfolio shows my past projects that I will be continuously
                        building on.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
