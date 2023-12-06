import React from 'react'

const resumeURL = "https://drive.google.com/file/d/1eGVGhTtIjzsyvc3ngA71aAlr0DVgsVdF/view?usp=sharing"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resumeURL} target="_blank" rel="noopener noreferrer" download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA