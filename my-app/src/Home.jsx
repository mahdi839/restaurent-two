import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import bg from '../src/images/bg.jpg'
import bg2 from '../src/images/bg2.jpg'
import Data from './HomeData';
import image from './images/middle-img.png'
import iconpic from '../src/images/icon1.png'
import iconpic2 from '../src/images/icon-2.png'
import iconpic3 from '../src/images/icon-3.png'
import iconpic4 from '../src/images/icon-4.png'
import iconpic5 from '../src/images/icon-5.png'
import iconpic6 from '../src/images/icon-6.png'
import sign from './images/signature.png'
export default function Home() {
useEffect(()=>{
Aos.init({
  offset:100,
  duration:1000,
  easing:'ease',
  
})

})
  
  return (
    <div>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active " data-aos='fade-up'>
      
      <img className="d-block w-100" src={bg} alt="First slide"/>
      <div class="carousel-caption   caption-div" >
      <h4>Mega Discounts on</h4>
      <h1>Testy Bites</h1>
      <h1>Healthy Foods</h1>
      <h2>10-50% OFF</h2>
      <button>VIEW DISHES</button>
    </div>
     
      </div>
      <div className="carousel-item" data-aos='fade-down'>
        <img className="d-block w-100" src={bg2} alt="Second slide"/>
        <div class="carousel-caption   snd" data-aos='fade-up-left'>
      <h4 data-aos='fade-up-left'>Home Made Dish On Your Doorstep</h4>
      <h1 data-aos='fade-up-left'>Greate Dish @</h1>
      <h1 data-aos='fade-up-left' >Greate Price</h1>
      <h2 data-aos='fade-up-left' >10-50% OFF</h2>
      <button>VIEW DISHES</button>
    </div>
      </div>
      
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  <div className='home-second'>
 
  
  
 
  <div className="container  ">
 
  
  <div className="row info">
  <div className="col-lg-4 col-md-12 ">
 
  <Data photo ={iconpic} 
        title={'Dhaka'}
        des={'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.'}
  />
  <Data photo ={iconpic2} 
  title={'Chattogram cuisines'}
  des={'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.'}
/>
<Data photo ={iconpic3} 
title={'Noakhali'}
des={'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.'}
/>
  </div>
  <div className="col-lg-4 col-md-12 middle-image">

  <img src={image} alt="" />
  </div>
  <div className="col-lg-4 col-md-12">
  
  <Data photo ={iconpic4} 
        title={'Comila'}
        des={'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.'}
  />
  <Data photo ={iconpic5} 
  title={'khulna'}
  des={'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.'}
/>
<Data photo ={iconpic6} 
title={'Rajsahi'}
des={'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.'}
/>
  
  </div>
  
  
  </div>
  
  </div>
  
  </div>
  <div className="bg-md">
  <div className="container">
  <div class="row">
      <div className="col-lg-6 col-md-12 col-sm-12 desc-sign" data-aos='fade-right'>
      <h1>Upgrade to the latest Taste!</h1>
      <h6>Est sit amet facilisis magna etiam tempor. Dolor sed viverra ipsum nunc aliquet bibendum enim. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Auctor augue mauris gravida.

      Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Sodales ut eu sem integer vitae. Nibh tortor id aliquet lectus proin nibh. Sed velit dignissim sodales ut.</h6>
      <img src={sign} alt="" data-aos='fade-right' />
      <h4 data-aos='fade-right'>Mahdi -Hasan</h4>
      
      
      </div>
  </div>
  </div>

  </div>
    </div>
  )
}
