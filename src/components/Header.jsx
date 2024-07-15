/* eslint-disable no-unused-vars */
import React from 'react'
import Logo from "../assets/images/appLogo.svg";
import "../styles/header.css"

function Header() {
  return (
    <div className='navBar'>
        <div className="leftSide">
            <img src={Logo} alt="cloudyImage" />
            <h2>Weather App</h2>
        </div>
        <div className="rightSide">
          
        </div>
    </div>
  )
}

export default Header