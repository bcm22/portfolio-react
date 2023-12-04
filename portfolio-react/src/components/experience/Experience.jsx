import React from 'react'
import './experience.css'
import { FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience details'>
              <FaCheckCircle />
              <h4>HTML</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience details'>
              <FaCheckCircle />
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience details'>
              <FaCheckCircle />
              <h4>JavaScript</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience details'>
              <FaCheckCircle />
              <h4>JQuery</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience details'>
              <FaCheckCircle />
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
        {/* end of frontend */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience details'>
              <FaCheckCircle />
              <h4>Node.js</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience details'>
              <FaCheckCircle />
              <h4>APIs</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience details'>
              <FaCheckCircle />
              <h4>Express.js</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience details'>
              <FaCheckCircle />
              <h4>MongoDB, Mongoose</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience details'>
              <FaCheckCircle />
              <h4>MySQL, Sequelize</h4>
              <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Experience