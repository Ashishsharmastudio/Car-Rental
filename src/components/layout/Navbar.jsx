import React from 'react'
import Logo from '../../assets/logo.png'
import Watch from '../../assets/watch.png'
import Download from '../../assets/download.png'
import Profile from '../../assets/profile.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className='watch-icon'>
        <img src={Watch} alt="Watch-icon"/>
        <span>9140585097</span>

      </div>
      <div className='right-link'>
        <Link src={"/"}>
         <img src={Download} alt="download-icon" />
        </Link>
        <Link src={"/"}>
         <img src={Profile} alt="profile-icon" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
