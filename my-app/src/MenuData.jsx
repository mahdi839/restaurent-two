

import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function MenuData(props) {
  const {photo,title,desc,price}=props;

  useEffect(()=>{
    Aos.init({
      offset:100,
      duration:1000,
      easing:'ease',
      
    })
    
    })
  return (
    <div className='main-data-menu'>
      <div className="data-img">

      <img src={photo} alt="" data-aos='fade-up'/>
     
      </div>
      <div className="data-desc" data-aos='fade-down' >
      
      <h1>{title}</h1>
      <h6>{desc}</h6>
      </div>
      <div className="bordr-d">
      </div>
      <div className="data-price" data-aos='fade-right' >
      <h4>{price}</h4>
      </div>
    </div>
  )
}
