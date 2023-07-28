import React, { useEffect, useState } from 'react'
import "./Products.css"
import rain1 from "../Assets/Rain_1.jpg"
import rain2 from "../Assets/Rain_2.jpg"
import rain3 from "../Assets/Rain_3.jpg"
import rain4 from "../Assets/Rain_4.jpg"
import { BsTwitter,BsWhatsapp,BsInstagram ,BsFacebook,BsShareFill,BsHeartFill} from 'react-icons/bs';
import pro1 from "../Assets/Pro_1.png"
import pro2 from "../Assets/Pro_2.png"
import pro3 from "../Assets/Pro_3.jpg"
import pro4 from "../Assets/Pro_4.jpg"
import pro5 from "../Assets/Pro_5.jpg"
import Pro6 from "../Assets/Pro_6.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from '@trendyol-js/react-carousel';
import MultipleItems from './Try'
import {Items} from '../Datas'
import ProBan from '../ProductBanner/ProductBanner'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Actions/productAction'
import ProductListing from './ProductListing'
import ProductComp from './ProductComponent'
const img=[
  {
    id:1,
    src:rain2
  },
  {
    id:2,
    src:rain2
  },
  {
    id:3,
    src:rain2
  },
  {
    id:4,
    src:rain2
  },
  {
    id:5,
    src:rain2
  },
  {
    id:6,
    src:rain2
  },
];
const Products=()=> {
// const dispatch =useDispatch();
//     useEffect(()=>
//     {
//       dispatch(getProducts)
//     },[])
// const products = useSelector((state)=>state.allProdcuts.products);
// const{id,title}=products[0];
// console.log(products)
    return ( 
    <>
    <ProBan/>
    <br/>
    <br/>
    <h6 className='rain_dot'>Popular</h6>
    <h2 className='rain_pro'>Sports Products</h2>
    
    <div className='rain_jack'>
      </div>
          <div className='img_ff'>
    <section class="shop_section sec_ptb_120">
    {/* <div class="containerr">
{Items.map((pro)=> (
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="shop_card wow fadeInUp" data-wow-delay=".2s">
            <a class="wishlist_btn" href="#!"><BsHeartFill/></a>
            <div class="share_btns">
              <button type="button" class="share_btn">
              <BsShareFill/>
              </button>
              <ul class="ul_li">
              <li><a href="#"><BsTwitter/></a></li>
                <li><a href="#"><BsWhatsapp/></a></li>
                <li><a href="#"><BsInstagram/></a></li>
                <li><a href="#"><BsFacebook/></a></li>
              </ul>
            </div>
            <a class="item_imag" href="shop_details.html">
              <img src={pro.url} alt="image_not_found" width={300} />
            </a>
            <div class="item_content">
              <h3 class="item_title text-uppercase">
                <a href="shop_details.html">{pro.title}</a>
              </h3>
              <div class="btns_group">
                <span class="item_price bg_default_brown">${pro.Prize}</span>
                <a class="btn btn_border border_black text-uppercase" href="#!">Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
        </div>
               ))}
               </div> */}
               <ProductComp/>
               </section>
               </div>
        <h6 className='rain_dot'>Men</h6>
        <h2 className='rain_pro'>Rains and jackets</h2>
        
        <div className='rain_jack'>
          </div>
          <br/>
<MultipleItems/>
        </>
     );
}

export default Products;