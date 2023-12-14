import React from 'react'
import './Success.css'
import SuccessLogo from './New employee-pana 1.png'
export const Success = () => {
  return (
    <div>
        <section class="section__container class__container">
            <div class="class__image">
                <span class="bg__blur"></span>
                <img src={SuccessLogo} alt="class" class="class__img-1"/>
            </div>
            <div class="class__content">
                <h2 class="section__header">Your path to success</h2>
                <p>We provide many projects that help companies do their work</p>
                <button class="btn">project</button>
            </div>
        </section>
    </div>
  )
}
