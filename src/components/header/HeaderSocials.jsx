import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/brian-monda-896967139?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=iowww.linkedin.com/in/brian-monda-2b1493279" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/bcm22" target="_blank"><FaGithub /></a>
        </div>
  )
}

export default HeaderSocials