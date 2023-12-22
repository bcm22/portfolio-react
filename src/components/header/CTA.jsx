import React from 'react'

const resumeURL = "https://docs.google.com/document/d/1psDIhzaBGNS69VlPCs4TJGmh474ad3q62XuUG_SPVJQ/edit?usp=drive_link"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resumeURL} target="_blank" rel="noopener noreferrer" download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA