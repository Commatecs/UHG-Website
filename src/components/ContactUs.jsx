import React from 'react'
import './ContactUs.css'

export const ContactUs = () => {
  return (
    <div>
    <main>
        <section className="contact">
            <div className="container">
                <div className="left">
                    <div className="from-wrapper">
                        <div className="contact-heading">
                            <h1>Let's work together<span>.</span></h1>
                            <p className="text">0r reach us via :
                             <a href='malito:Publius@mail.com'> Publius@mail.com</a></p>
                        </div>
                        <form action="ContactUs.jsx" method='post' className="contact-form">
                            <div className="input-warp">
                                <input className='contact input' autoComplete='off' name='First 
                                Name' type="text" required/>
                               <label>Frist Name</label>
                               <i class="bi bi-person-vcard-fill"></i>
                            </div>
                            <div className="input-warp">
                                <input className='contact input' autoComplete='off' name='Last 
                                Name' type="text" required/>
                               <label>Last Name</label>
                               <i class="bi bi-person-vcard-fill"></i>
                            </div>
                            <div className="input-warp">
                                <input className='contact input' autoComplete='off' name='Email'
                                 type="email" required/>
                               <label>Email</label>
                               <i class="bi bi-envelope-fill"></i>
                            </div>
                            <div className="input-warp">
                                <textarea name="Massage" autoComplete='off'
                                 className="contact-input"required></textarea>
                               <label>Massage</label>
                               <i class="bi bi-inbox-fill"></i>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </section>
    </main>
    </div>
  )
}

    

