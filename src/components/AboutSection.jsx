import React from 'react'
import Logo from './Logo.png'

export const AboutSection = () => {
  return (
   <section className='text white'>
<div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl: gap-16 sm:py-16 xl:px-16'>
   < img src={Logo} alt="about."  width={500} height={500}/>
  <div>
    <h2 >About US</h2>
    <p> United Hawks is a company serving both the Information Technology and Communication Fields.</p>
    <p>United Hawks entered the Egyptian market in early 2012</p>
    <p>United Hawks aims to serve microenterprises, small and medium-sized enterprises.</p>
    <p>United Hawks is keen to offer practical and logical solutions for our customers in many
     aspects of life related to modern technology for our customers relief,
     and developing their companies to the level that allows flexibility in companies management and administration,
      staff and clients following-up, and both of their financial and commercial transactions.</p>
    <p>United Hawks does have many significant trademarks, like Commatecs, ExaSpeed , CooHosting , CoTecStore , 
        and Other We deal with the other trademarks that are recommended by International Quality Management
         Institutions, which of course seek comfort for users or consumers.</p>
    <p>Moreover, such trademarks that we are dealing with are highly remarked by the international quality standards throughout 
        Monitoring and Comparing Technology Production Institutions in global markets.</p>
    <p>We are also supporting our customers with professional, highly expert engineers with broad practical experience.</p>
    <p>United Hawks always makes sure to provide after-sales service in a way that
         keeps linkage is open between our consumers to gain more trust in our company</p>
    <p>United Hawks provides several and various solutions that suit different kinds of work atmosphere and environment.
         Our customers' success looks like ours; achieving, and helping them to reach, their goals is as achieving ours.</p>

  </div>


</div>
   </section>
  )
}
