import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import camera from '../assets/camera.svg'
import '../styles/Header.css'

function Header () {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="Insta"/>
        </Link>
        <Link to="/post">
          <img src={camera} alt="New"/>
        </Link>
      </div>
    </header>
  )
}

export default Header
