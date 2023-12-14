import React from 'react'
import './Landing.css'
import Logo from './Logo.png'
export default function Landing() {
  return (
    <div>
        <div class="section__container header__container">
        <div class="header__content">
            <span class="bg__blur"></span>
            <span class="bg__blur header__blur"></span>
            <h1><span>United</span> Hawks </h1>
            <h4><span>We Develop</span> All Types of Businesses, Whatever They are</h4>
            <p>Specializing
                United Hawks Group
                in Has a Wide Range of Activities</p>
            <div class="button btn">Get Started</div>
        </div>
        <div class="header__image">
            <img src={Logo} alt="header." />
        </div>
        </div>
    </div>
  )
}
