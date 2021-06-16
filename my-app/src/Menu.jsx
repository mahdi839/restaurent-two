import React, { useState,useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import MenuData from './MenuData'
import image from './images/our flavour menu/img1.jpg'
import image2 from './images/our flavour menu/img2.jpg'
import image3 from './images/our flavour menu/img3.jpg'
import image4 from './images/our flavour menu/img4.jpg'
import image5 from './images/our flavour menu/img5.jpg'
import image6 from './images/our flavour menu/img6.jpg'
import image7 from './images/our flavour menu/img7.jpg'
import image8 from './images/our flavour menu/img8.jpg'
import image9 from './images/our flavour menu/img9.jpg'
import image10 from './images/our flavour menu/img10.jpg'
import image11 from './images/our flavour menu/img11.jpg'
import image12 from './images/our flavour menu/img12.jpg'
export default function Menu() {
  return (
    <div className='container-fluid main-fmenu'>
      <div className="text-center  Edit-menu ">
      <h1 className='text-danger font-weight-bolder'>Our Flavorful Menus</h1>
      <h6>Odio morbi quis commodo odio aenean sed adipiscing. Neque ornare aenean euismod elementum nisi quis.</h6>
      </div>
      <div className="container-fluid">
      <div className="row">
      <div className=" root-data one">
      <MenuData
      photo={image}
      title={'Waldorf Salad	'}
      price={'$3.95'}
      desc={'Fresh apples, celery and walnuts, dressed in mayonnaise	'}
      />
      
      <MenuData
      photo={image2}
      title={'Potato Croquettes		'}
      price={'$4.95'}
      desc={'Fresh apples, celery and walnuts, dressed in mayonnaise	'}
      />
      <MenuData
      photo={image3}
      title={'Garganelli		'}
      price={'$10.95'}
      desc={'Fresh apples, celery and walnuts, dressed in mayonnaise	'}
      />
      <MenuData
      photo={image4}
      title={'Cheesy Macaroni	'}
      price={'$9.95'}
      desc={'Fresh apples, celery and walnuts, dressed in mayonnaise	'}
      />
      <MenuData
      photo={image5}
      title={'Gado-gado		'}
      price={'$7.95'}
      desc={'Fresh apples, celery and walnuts, dressed in mayonnaise	'}
      />
      <MenuData
      photo={image6}
      title={'Chicken Pizza	'}
      price={'$3.95'}
      desc={'Fresh apples, celery and walnuts, dressed in mayonnaise	'}
      />
      
      </div>
      <div className=" root-data two">
      <MenuData
      photo={image}
      title={'Waldorf Salad	'}
      price={'$3.95'}
      desc={'Fresh apples, celery and walnuts, dressed in mayonnaise	'}
      />
      
      <MenuData
      photo={image2}
      title={'Potato Croquettes		'}
      price={'$4.95'}
      desc={'Fresh apples, celery and walnuts, dressed in mayonnaise	'}
      />
      <MenuData
      photo={image3}
      title={'Garganelli		'}
      price={'$10.95'}
      desc={'Fresh apples, celery and walnuts, dressed in mayonnaise	'}
      />
      <MenuData
      photo={image4}
      title={'Cheesy Macaroni	'}
      price={'$9.95'}
      desc={'Fresh apples, celery and walnuts, dressed in mayonnaise	'}
      />
      <MenuData
      photo={image5}
      title={'Gado-gado		'}
      price={'$7.95'}
      desc={'Fresh apples, celery and walnuts, dressed in mayonnaise	'}
      />
      <MenuData
      photo={image6}
      title={'Chicken Pizza	'}
      price={'$3.95'}
      desc={'Fresh apples, celery and walnuts, dressed in mayonnaise	'}
      />
      
      </div>
      </div>
      </div>
    </div>
  )
}
