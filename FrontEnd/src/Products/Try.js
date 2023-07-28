import rain1 from "../Assets/Rain_1.jpg"
import rain2 from "../Assets/Rain_2.jpg"
import rain3 from "../Assets/Rain_3.jpg"
import rain4 from "../Assets/Rain_4.jpg"
import rain5 from "../Assets/Rain_5.jpg"
import rain6 from "../Assets/Rain_6.jpg"
import rain7 from "../Assets/Rain_7.jpg"
import rain8 from "../Assets/Rain_8.jpg"
import rain9 from "../Assets/Rain_9.jpg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Try.css"
import React, { Component } from "react";
import Slider from "react-slick";
import { BsTwitter,BsWhatsapp,BsInstagram ,BsFacebook,BsShareFill,BsHeartFill} from 'react-icons/bs';
import "../Products/Products.css"

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <>
      <div>
        <div className="Rain_Slide_Try">
        <Slider {...settings}>
          <div>
           <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="shop_card wow fadeInUp" data-wow-delay=".2s">
                  <a class="wishlist_btn" href="#!"><BsHeartFill/></a>
                  <a class="item_image" href="shop_details.html">
                  <img src={rain8} alt="image_not_found" width={300}/>
                  </a>
                  <div class="item_content">
                    <h3 class="item_title text-uppercase">
                      <a href="shop_details.html">Rain Cort</a>
                    </h3>
                    <div class="btns_group">
                      <span class="item_price bg_default_brown">₹999</span>
                      <a class="btn btn_border border_black text-uppercase" href="#!">Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div>
           <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="shop_card wow fadeInUp" data-wow-delay=".2s">
                  <a class="wishlist_btn" href="#!"><BsHeartFill/></a>
                  <a class="item_image" href="shop_details.html">
                  <img src={rain2} alt="image_not_found" width={300}/>
                  </a>
                  <div class="item_content">
                    <h3 class="item_title text-uppercas">
                      <a href="shop_details.html">VROJASS Rain Coat for Men</a>
                    </h3>
                    <div class="btns_group">
                      <span class="item_price bg_default_brown">₹999</span>
                      <a class="btn btn_border border_black text-uppercase" href="#!">Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div>
         
           <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="shop_card wow fadeInUp" data-wow-delay=".2s">
                  <a class="wishlist_btn" href="#!"><BsHeartFill/></a>
                  <a class="item_image" href="shop_details.html">
                  <img src={rain3} alt="image_not_found" width={300}/>
                  </a>
                  <div class="item_content">
                    <h3 class="item_title text-uppercase">
                      <a href="shop_details.html">Duckback Solid Men's Rain Suit</a>
                    </h3>
                    <div class="btns_group">
                      <span class="item_price bg_default_brown">₹999</span>
                      <a class="btn btn_border border_black text-uppercase" href="#!">Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div>
          
           <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="shop_card wow fadeInUp" data-wow-delay=".2s">
                  <a class="wishlist_btn" href="#!"><BsHeartFill/></a>
                  <a class="item_image" href="shop_details.html">
                  <img src={rain4} alt="image_not_found" width={300}/>
                  </a>
                  <div class="item_content">
                    <h3 class="item_title text-uppercase">
                      <a href="shop_details.html">ZEEL Seam Sealed Raincoat</a>
                    </h3>
                    <div class="btns_group">
                      <span class="item_price bg_default_brown">₹999</span>
                      <a class="btn btn_border border_black text-uppercase" href="#!">Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div>
           <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="shop_card wow fadeInUp" data-wow-delay=".2s">
                  <a class="wishlist_btn" href="#!"><BsHeartFill/></a>
                  <a class="item_image" href="shop_details.html">
                  <img src={rain5} alt="image_not_found" width={300}/>
                  </a>
                  <div class="item_content">
                    <h3 class="item_title text-uppercase">
                      <a href="shop_details.html">SaphiRose Men's Solid Raincoat Jacket</a>
                    </h3>
                    <div class="btns_group">
                      <span class="item_price bg_default_brown">₹999</span>
                      <a class="btn btn_border border_black text-uppercase" href="#!">Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div>
           <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="shop_card wow fadeInUp" data-wow-delay=".2s">
                  <a class="wishlist_btn" href="#!"><BsHeartFill/></a>
                  <a class="item_image" href="shop_details.html">
                  <img src={rain4} alt="image_not_found" width={300}/>
                  </a>
                  <div class="item_content">
                    <h3 class="item_title text-uppercase">
                      <a href="shop_details.html">Rocksport Waterproof Polyester Raincoat</a>
                    </h3>
                    <div class="btns_group">
                      <span class="item_price bg_default_brown">₹999</span>
                      <a class="btn btn_border border_black text-uppercase" href="#!">Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div>
           <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="shop_card wow fadeInUp" data-wow-delay=".2s">
                  <a class="wishlist_btn" href="#!"><BsHeartFill/></a>
                  <a class="item_image" href="shop_details.html">
                  <img src={rain7} alt="image_not_found" width={240}/>
                  </a>
                  <div class="item_content">
                    <h3 class="item_title text-uppercase">
                      <a href="shop_details.html"> THE CLOWNFISH Rain Coat for Men</a>
                    </h3>
                    <div class="btns_group">
                      <span class="item_price bg_default_brown">₹999</span>
                      <a class="btn btn_border border_black text-uppercase" href="#!">Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="shop_card wow fadeInUp" data-wow-delay=".2s">
                  <a class="wishlist_btn" href="#!"><BsHeartFill/></a>
                  <a class="item_image" href="shop_details.html">
                  <img src={rain8} alt="image_not_found" width={300}/>
                  </a>
                  <div class="item_content">
                    <h3 class="item_title text-uppercase">
                      <a href="shop_details.html">FabSeasons Waterproof Full Raincoat</a>
                    </h3>
                    <div class="btns_group">
                      <span class="item_price bg_default_brown">₹999</span>
                      <a class="btn btn_border border_black text-uppercase" href="#!">Add To Cart</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </Slider>
        </div>
      </div>
      
      
      </>
    );
  }
}