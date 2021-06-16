import React from 'react';
import Navbar from './Navbar'
import Home from './Home';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import About from './About'
import About2 from './About2';
import OurProducts from './OurProducts';
import Menu from './Menu';
import MenuData from './MenuData';
import Footer from './Footer';
function App() {
  
  return (
    <div className="App">
     
    <Navbar />
    <Home />
    <About />
    <About2 />
    <OurProducts />
    <Menu  />
    <Footer />

    </div>
  );
}

export default App;
