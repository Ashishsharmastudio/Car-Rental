import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='logo-img'>
       <Link src={"/"}>
        <img src={Logo} alt="logo" />
       </Link>
       </div>
       <div className='footer-link'>
         <a href="#">Home</a>
         <a href="#">About</a>
         <a href="#">Services</a>
         <a href="#">News</a>
         <a href="#">Contact</a>
         <a href="#">Privacy - Policey</a>
       </div>
       <p>All Copyright are reserved by RIDE EVEE</p>
    </div>
  )
}

export default Footer
