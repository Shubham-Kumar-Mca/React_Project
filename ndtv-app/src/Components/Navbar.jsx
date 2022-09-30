import { Facebook, Notifications, Search, Twitter } from '@mui/icons-material'
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='NavbarContainer'>
      <ul className='smallNavbar'>
        <li className='ndtv'>NDTV</li>
        <li>हिंदी न्यूज़</li>
        <li>BUSINESS</li>
        <li>MOVIES</li>
        <li>CRICKET</li>
        <li>TECH</li>
        <li>FOOD</li>
        <li>WEB STORIES</li>
        <li>EDUCATION</li>
        <li>SWAASTH</li>
        <li>LIFTSTYLE</li>
        <li>HEALTH</li>
        <li>SHOPING</li>
        <li>ART</li>
      </ul>
      
      <div className='mainNavbar'>
        <div className='logo'>
          <img src="https://i.ibb.co/QCf1NtT/Untitled-removebg-preview.png" alt="NDTV LOGO" />
        </div>
        <div className='allNews'>
          <ul>
            <li>LIVE TV</li>
            <li>LATEST</li>
            <li>INDIA</li>
            <li>COVID</li>
            <li>OPINION</li>
            <li>VIDEO</li>
            <li>CITIES</li>
            <li>WORLD</li>
            <li>OFFBEAT</li>
            <li>TRENDS</li>
            <li>PHOTOS</li>
          </ul>
        </div>
        <div className='Social-media'>
          <div className="iccon"><Twitter /></div>
          <div className="iccon"><Facebook /></div>
          <div className="iccon"><Notifications /></div>
          <div className="iccon"><Search /></div>

        </div>
      </div>

    </div>
  )
}

export default Navbar