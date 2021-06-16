import React from 'react'
import logo from '../src/images/logo.png'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MenuIcon from '@material-ui/icons/Menu';
export default function Navbar() {
  return (
    
  
    <nav className="navbar navbar-expand-lg bg-white  fixed-top ">
 
    <a href="#" className='navbar-brand'>
    <img src={logo} alt="" />
    </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"><MenuIcon className='drop-icon'/> </span>
</button>
    
    <div className="collapse navbar-collapse navul" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active arrow ">
          <a className="nav-link " href="#">Home <span className="sr-only">(current)</span></a>
          <KeyboardArrowDownIcon className='arrow-icon' />
        </li>
        <li className="nav-item arrow ">
          <a className="nav-link" href="#">About</a>
          <KeyboardArrowDownIcon className='arrow-icon' />
        </li>
        <li className="nav-item arrow ">
          <a className="nav-link" href="#">Our Products</a>
          <KeyboardArrowDownIcon className='arrow-icon' />
        </li>
        <li className="nav-item arrow ">
          <a className="nav-link " href="#">Chiness</a>
          <KeyboardArrowDownIcon className='arrow-icon' />
        </li>
        <li className="nav-item arrow ">
        <a className="nav-link " href="#">Shop</a>
        <KeyboardArrowDownIcon className='arrow-icon' />
      </li>
      <li className="nav-item arrow ">
      <a className="nav-link " href="#">Pages</a>
      <KeyboardArrowDownIcon className='arrow-icon' />
    </li>
      </ul>
    </div>
  </nav>
   
  )
}
