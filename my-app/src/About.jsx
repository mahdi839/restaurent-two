import React from 'react'
import imgwh1 from './images/what mekes our/img-wh1.jpg'
import imgwh2 from './images/what mekes our/img-wh2.jpg'
import imgwh3 from './images/what mekes our/img-wh3.jpg'
import iconwh1 from './images/what mekes our/icon-wh1.png'
import iconwh2 from './images/what mekes our/icon-wh2.png'
import iconwh3 from './images/what mekes our/icon-wh3.png'
import iconwh4 from './images/what mekes our/icon-wh4.png'

import AboutData from './AboutData'
export default function About() {
  return (
    <div className='about-section'>
       <div className="container">
       <div className="row">
       <div className="col-md-6 col-sm-12 make">
       <div id="carouselExampleSlidesOnly" className="carousel slide " data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={imgwh1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={imgwh2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={imgwh3} alt="Third slide"/>
    </div>
  </div>
</div>
       
       
       
       </div>
       <div className="col-md-6 col-sm-12 main-about-data">
       <h1 className='ml-md-5'>What Makes our Menus Special ?</h1>
       <AboutData 
       photo={iconwh1}
       title={'Pure Ingreidents'}
       desc={'Vestibulum morbi blandit cursus risus at ultrices mi. Facilisis gravida neque convallis a.'}
       data-aos='fade-right'/>
       <AboutData 
       photo={iconwh2}
       title={'Pure Ingreidents'}
       desc={'Vestibulum morbi blandit cursus risus at ultrices mi. Facilisis gravida neque convallis a.'}
       data-aos='fade-right'/>
       <AboutData 
       photo={iconwh3}
       title={'Pure Ingreidents'}
       desc={'Vestibulum morbi blandit cursus risus at ultrices mi. Facilisis gravida neque convallis a.'}
       data-aos='fade-right' />
       <AboutData 
       photo={iconwh4}
       title={'Pure Ingreidents'}
       desc={'Vestibulum morbi blandit cursus risus at ultrices mi. Facilisis gravida neque convallis a.'}
       />
      
       </div>
        
       </div>
       
       </div>
    </div>
  )
}
