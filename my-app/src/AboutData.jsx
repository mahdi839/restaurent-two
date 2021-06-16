import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function AboutData(props) {
  useEffect(()=>{
    Aos.init({
      offset:100,
      duration:2000,
      easing:'ease',
      delay: 100,
    })
    
    })
    const {photo,title,desc}=props;
  return (
    <div className='data-about'>
     
      <div className="make-img" data-aos='fade-up-right' >
      <img src={photo} alt="" />
      </div>
      <div className="desc-make" data-aos='fade-up-left'>
      <h2>{title}</h2>
      <h4>{desc}</h4>
      </div>
    </div>
  )
}
