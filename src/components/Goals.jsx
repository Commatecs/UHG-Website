import React from 'react'
import './Goals.css'
export const Goals = () => {
  return (
    <section class="section__container explore__container">
    <div class="explore__header">
        <h2 class="section__header">The goals of the company</h2>
       
    </div>
    <div class="explore__grid">
        <div class="explore__card">
            <span><i class="ri-briefcase-3-fill"></i></span>

            <p>Project Management (Administrative Management)</p>
           
        </div>
        <div class="explore__card">
            <span><i class="ri-line-chart-fill"></i></span>

            <p>Development and Upgrading of Business</p>
            
        </div>
        <div class="explore__card">
            <span><i class="ri-calculator-fill"></i></span>

            <p>Planning and Using Different Sciences to Develop Business</p>
           
        </div>
        <div class="explore__card">
            <span><i class="ri-bar-chart-fill"></i></span>

            <p>We Develop All Types of Businesses, Whatever They are, by Harnessing The Capabilities of
                Technology
                For Those Businesses</p>
          
        </div>
    </div>
</section>
  )
}
