import React, { useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import "../HomePage/Home.css"
// import Footer from '../Footer/Footer';
import brand from "../Assets/banner.gif"
import brand2 from "../Assets/banner 2.gif"
import brand3 from "../Assets/banner 3.gif"
import brand4 from "../Assets/banner 4.gif"
import brand5 from "../Assets/banner 5.gif"
import Products from '../Products/Products';
import banner from "../Assets/banner.jpg"
import Footer from '../Footer/Footer';
import Bad from "../Assets/Bad_Stringing.jpg"
function Home() {
    const [imageNum, setImageNum] = useState(1);
   const sliderImages = [
         {
            url: require('./images/Slider_1.jpeg')
         },
         {
            url: require('./images/Slider_2.jpeg')
         },
         {
          url: require('./images/Slider_3.jpeg')
         },
         {
          url: require('./images/Slider_4.jpeg') 
         },
         
   ];
    return ( <>
    <div className='sliderss'>
     <SimpleImageSlider
            width={1701}
            height={800}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {5}
         />
         </div>
         
         <h6 className='rain_dot cl'>Popular</h6>
        <h2 className='rain_pro'>Teams And Clubs</h2>
         <div className='brand-container'>
        <div class="item">
          <a href="collections/all.html">
            
            <img src={brand} class="img-fluid" alt="bland" width={150}/>
            <h5 style={{marginLeft:10}}>Football Club</h5>
          </a>
          </div>
        <div class="item">
          <a href="collections/all.html">
            
            <img src={brand2} class="img-fluid" alt="bland" width={150}/>
            <h5 style={{marginLeft:10}}>Rugby Club</h5>
            
          </a>
          </div>
        <div class="item">
          <a href="collections/all.html">
            
            <img src={brand3} class="img-fluid" alt="bland" width={150}/>
            <h5 style={{marginLeft:10}}>Cricket Club</h5>
            
          </a>
          </div>
        <div class="item">
          <a href="collections/all.html">
            
            <img src={brand4} class="img-fluid" alt="bland" width={150}/>
            <h5 style={{marginLeft:10}}>Cycling Club</h5>
            
          </a>
          </div>
        <div class="item">
          <a href="collections/all.html">
            
            <img src={brand5} class="img-fluid" alt="bland" width={150}/>
            <h5 style={{marginLeft:10}}>Swiming Club</h5>
          </a>
          </div>
         </div>
         <br/>
         <br/>
         <br/>
          <Products/>
            <img src={banner} className="banner_img" alt="bland" width={1500}/>
            <h3 className='Bad_h3'>OUR CUSTOMIZED SERVICES</h3>
            <h2 className='Bad_h2'>Badmintton Racquet Stringing</h2>
            <img src ={Bad} width={750} className='Raq'/>
            <p className='Bad_p'>Some players prefer to have the comfort, power and flexibility to choose a combination of features on a single string. For this, few tennis brands offer Hybrid Strings, which have one string for Mains and a different string for Crosses. Now, YOU can also create your very own hybrid string!
To avail of this service at Sportsjam.in, add your favourite racquet in your order, along with Tennis String for Mains and Tennis String for Crosses (Hybrid Stringing). Please note that a good understanding of string features are required to achieve an optimum balance between comfort, durability, control and power.</p>
       <br/>
       <br/>
       <br/>
       <Footer/>
    </>
     );
}

export default Home;