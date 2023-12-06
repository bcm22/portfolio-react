import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/password.png'
import IMG2 from '../../assets/Note-Taker.png'
import IMG3 from '../../assets/logo-maker.png'
import IMG4 from '../../assets/readme.png'
import IMG5 from '../../assets/text-editor.webp'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Password Generator',
    github: 'https://github.com/bcm22/password_generator',
    demo: 'https://bcm22.github.io/password_generator/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Note Taker',
    github: 'https://bcm22.github.io/note_taker/',
    demo: 'https://immense-castle-52309-493bf1a5217d.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Logo Generator',
    github: 'https://github.com/bcm22/logo_generator',
    demo: 'https://github.com/bcm22/logo_generator',
  },
  {
    id: 4,
    image: IMG4,
    title: 'ReadMe Generator',
    github: 'https://github.com/bcm22/readme_generator/blob/main/README.md',
    demo: 'https://github.com/bcm22/readme_generator/blob/main/README.md',
  },
  {
    id: 5,
    image: IMG5,
    title: 'PWA Text Editor',
    github: 'https://github.com/bcm22/pwa-text-editor',
    demo: 'https://bcm22-jate-5a6e859a0464.herokuapp.com/',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio