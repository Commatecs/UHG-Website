import React from 'react'
import'./Footer.css'
import Logo from './Logo.png'

export const Footer = () => {
  return (
    <div id='contact'>
        <footer class="section__container footer__container">
        <span class="bg__blur"></span>
        <span class="bg__blur footer__blur"></span>
        <div class="footer__col">
            <div class="footer__logo"><img src={Logo} alt="logo"/></div>
            <div class="footer__socials">
                <a href="#"><i class="ri-facebook-fill"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
                <a href="#"><i class="bi bi-twitter-x"></i></a>
            </div>
            <div class="footer__col">
                <h4>Home</h4>
            </div>
            <div class="footer__col">
                <h4>About</h4>
            </div>
            <div class="footer__col">
                <h4>Contact Us</h4>
            </div>
        </div>
    </footer>
    <div class="footer__bar">جميع الحقوق محفوظة لـشركة الصقور المتحدة ©2023-2012</div>
    </div>
  )
}
