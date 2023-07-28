import "./Products_Grid.css"
import React, { useState } from 'react'
import { FaForward,FaBackward } from 'react-icons/fa';
import { BsTwitter,BsWhatsapp,BsInstagram ,BsFacebook,BsShareFill,BsHeartFill,BsSearch} from 'react-icons/bs';
import { MdSportsHockey} from 'react-icons/md';
import { Product_Items } from "../Datas";
import Footer from '../Footer/Footer';
import pro from "../Assets/Pro_Bb.jpeg"

function Product_Grid() {
	const [search,setSearch]=useState('');
    return ( <>
    <div className="Grid_back">
    	<section class="breadcrumb_section text-uppercase" style={{ backgroundImage: 'url("https://wallpapers-hub.art/wallpaper-images/343632.jpg")'}}>
					<div class="container">
						<h1 class="page_title text-white wow fadeInUp fadg" data-wow-delay=".1s" style={{color:'black',}}>Online Shop</h1>
						<ul class="breadcrumb_nav ul_li wow fadeInUp fadg" data-wow-delay=".2s">
							<li><a href="index_1.html"><i class="fas fa-home"></i> Home</a></li>
							<li>Our Shop</li>
						</ul>
					</div>
					<div class="breadcrumb_icon_wrap">
						<div class="container">
							<div class="breadcrumb_icon wow fadeInUp" data-wow-delay=".3s">
								{/* <img src={}alt="icon_not_found"/> */}
								<span class="bg_shape" style={{width:'5000'}}><MdSportsHockey/></span>
							</div>
						</div>
					</div>
				</section>
                <br/>
    <section class="shop_section sec_ptb_120 bg_default_gray">
          <div class="container">
          	<ul class="filters-button-group ul_li_center wow fadeInUp Cat_All" data-wow-delay=".1s">
          		<li><button class="button text-uppercase active" data-filter="*">All</button></li>
          		<li><button class="button text-uppercase" >Cricket</button></li>
          		<li><button class="button text-uppercase" >Badminton</button></li>
          		<li><button class="button text-uppercase">FootBall</button></li>
          		<li><button class="button text-uppercase" >Hockey</button></li>
          		<li><button class="button text-uppercase" >Tennis</button></li>
          		<li><button class="button text-uppercase" >Gym Accessories</button></li>
          	</ul>

          	<div class="shop_filter_bar">
          		<div class="row">
          			<div class="col-lg-6">
          				<form action="#">
          					<div class="pricing_range wow fadeInUp" data-wow-delay=".2s">
          						<h4 class="item_title text-uppercase">Price range</h4>
          						<div class="price-range-area">
          							<div id="slider-range" class="slider-range"></div>
          							<div class="price-text d-flex align-items-center">
          								<span></span>
										  
          								<input type="text" id="amount" readonly/>
          							</div>
          						</div>
          					</div>
          				</form>
          			</div>
          		</div>
          	</div>

						<div class="container">
						<div class="row height d-flex justify-content-center align-items-center">
						<div class="col-md-6">
              <div class="form">
                  <input type="text" class="form-control form-input s_bod" placeholder="Search anything..."  onChange={(e)=>setSearch(e.target.value)} 
				  />
                </div>
                
              </div>
              
            </div>
            
          </div>
			{Product_Items.filter((pro)=>
			{
				return search.toLowerCase ==='' ? pro : pro.title.toLowerCase().includes(search);
				// return search.toUpperCase ==='' ? pro : pro.title.toUpperCase().includes(search);
			}).map((pro)=>(
          	<div class="shop_filter_grid grid wow fadeInUp no" data-wow-delay=".3s">
          		<div class="element-item chocolate greantea " data-category="chocolate">
          			<div class="shop_card">
          				<a class="wishlist_btn" href="#!"><i class="fal fa-heart"><BsHeartFill/></i></a>
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
          				<a class="item_image" href="shop_details.html">
          					<img src={pro.url} alt="image_not_found" width={300}/>
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

          		{/* <div class="element-item w-100">
          			<div class="shop_offer_banner text-white">
          				<div class="item_content">
          					<h4 class="item_title text-white text-uppercase">Buy One And Get One</h4>
          					<div class="discount_percentage">20%</div>
          					<p>
          						Offer Foy Only Sunday
          					</p>
          				</div>
          			</div>
          		</div> */}
                {/* <img src={pro} width={'960px'} height={'500px'} style={{marginLeft:'80px'}}/> */}
         {/* <ul class="pagination_nav ul_li_center" style={{marginLeft:450}}>
          		<li><a href="#!"><i class="fal fa-angle-double-left"><FaBackward color="black"/></i></a></li>
          		<li class="active"><a href="#!">1</a></li>
          		<li><a href="#!">2</a></li>
          		<li><a href="#!">3</a></li>
          		<li><a href="#!"><i class="fal fa-angle-double-right"> <FaForward color="black"/></i></a></li>
          	</ul>  */}
          </div>
        </section>
        <Footer/>
        </div>
    </> );
}

export default Product_Grid;