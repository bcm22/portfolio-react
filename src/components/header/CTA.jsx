import React from 'react'

const resumeURL = "https://drive.google.com/file/d/1b8j6Bvq-od8cKcQJpTxXXeOENI3vp65O/view?usp=drive_link"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resumeURL} target="_blank" rel="noopener noreferrer" download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA