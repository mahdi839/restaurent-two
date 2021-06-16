import React, { useState,useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import photo1 from './images/what mekes our/picp1.png'
import photo2 from './images/what mekes our/picp2.png'
import photo3 from './images/what mekes our/picp3.jpg'
import photo5 from './images/what mekes our/picp5.jpg'
import photo6 from './images/what mekes our/picp6.jpg'
import photo7 from './images/what mekes our/picp7.jpg'
import photo8 from './images/what mekes our/picp8.png'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';
export default function OurProducts() {
  useEffect(()=>{
    Aos.init({
      offset:100,
      duration:1000,
      easing:'ease',
      
    })
    
    })


  return (
    <div className='ourProducts'>
    <section>
    
    <div className=" headline mt-5" data-aos='fade-up' >
    <div className='product-heading text-center  '>
    <h1 data-aos='fade-down'className='text-danger' >Our Products</h1>
    <h4 data-aos='fade-down' >Quam pellentesque nec nam aliquam sem et tortor consequat. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis.</h4>
    
    </div>
    </div>
    </section>
     
 
    
    <div className="  btn-menu text-center" data-aos='fade-down'>
    <button >Breakfast</button>
    <button  >Lunch</button>
    <button >dinner</button>
    </div>
   
    
  
   
   
    
     
 <div className="main-card">
        <div className="card" data-aos='fade-right-up' >
  <img className="card-img-top" src={photo1} alt="Card image cap" />
 
    <div className='inter-icon'         >
  <FavoriteIcon className='shop' />
  <ShoppingCartIcon className='shop' />
  <VisibilityIcon className='shop' />
  </div>
 
  <div className="card-body">
 <div className="star">
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star checked"></span>
 <span class="fa fa-star checked"></span>
 </div>
    <h2 className="card-title" style={{marginTop:'1rem',marginBottom:'.5rem',marginLeft:'1rem'}}>salisbury stick</h2>
    <h4 className="card-text"style={{color:'brown',marginTop:'1rem',marginLeft:'1rem'}} >tk.350</h4>
   
  </div>
</div>

        
       
        <div className="card" data-aos='fade-left-up'>
        <img className="card-img-top" src={photo5} alt="Card image cap" />
     


     
       

          <div className='inter-icon'>
          <FavoriteIcon className='shop' />
          <ShoppingCartIcon className='shop' />
          <VisibilityIcon className='shop' />
          </div>
      
    
     
        <div className="card-body ">
        
        
        <div className="star">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        </div>
          <h2 className="card-title" style={{marginTop:'1rem',marginBottom:'.5rem',marginLeft:'1rem'}} >Buldek</h2>
          <h4 className="card-text" style={{color:'brown',marginTop:'1rem',marginLeft:'1rem'}}>tk.450</h4>
          
        </div>
      </div>
        
        
    
        <div className="card" data-aos='fade-right-up'>
        <img className="card-img-top" src={photo3} alt="Card image cap" />
       
     
      <div className='inter-icon'>
      <FavoriteIcon className='shop' />
      <ShoppingCartIcon className='shop' />
      <VisibilityIcon className='shop' />
      </div>
     
      
        <div className="card-body">
        <div className="star">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        </div>
          <h2 className="card-title" style={{marginTop:'1rem',marginBottom:'.5rem',marginLeft:'1rem'}}>Burger</h2>
          <h4 className="card-text"style={{color:'brown',marginTop:'1rem',marginLeft:'1rem'}} >tk.250</h4>
          
        </div>
      </div>
        
       
       
        <div className="card" data-aos='fade-down-up' >
        <img className="card-img-top" src={photo5} alt="Card image cap" />
        <div className='inter-icon'>
        <FavoriteIcon className='shop' />
        <ShoppingCartIcon className='shop' />
        <VisibilityIcon className='shop' />
        </div>
        <div className="card-body">
        <div className="star">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        </div>
          <h2 className="card-title"style={{marginTop:'1rem',marginBottom:'.5rem',marginLeft:'1rem'}}>borenui</h2>
          <h4 className="card-text" style={{color:'brown',marginTop:'1rem',marginLeft:'1rem'}}>tk.350</h4>
         
        </div>
      </div>
      </div>
        </div>
 
   
    
    
    
  )
}
