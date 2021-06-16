import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function About2() {
    useEffect(()=>{
        Aos.init({
            offset:100,
            duration:3000,
            easing:'ease',
            
          })
    })
  return (
    <div className='bg-img-div '>
  
     
    <div className='col-md-6 col-sm-10 all' data-aos='fade-left'>
    <h5 >Enjoy Great Recipe</h5>
    <h1 >Simple and Delicious Food</h1>
    <h2  >Flat 20% Discount</h2>
     <button >Shop Now</button>
    </div>
     </div>
  
  )
}
