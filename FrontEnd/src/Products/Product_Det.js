import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, selectedCartPro } from '../Redux_Up/Actions/ProductActions';
import { BsTwitter, BsWhatsapp, BsInstagram, BsFacebook ,BsStarHalf, BsStarFill} from 'react-icons/bs';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import cartg from '../Assets/cartg.gif';
import img from "../Assets/grid_7.jpg"
import img2 from "../Assets/Grid_10.jpg"
import img3 from "../Assets/Grid_11.jpg"

const Product_Det = () => {
  const product_up = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [productData, setProductData] = useState(null);


  const [num, setNum] = useState(1);

    const CounterI = () => {
       setNum (num+1);   
    }
    const CounterD = () => {
        setNum (num-1);
    }
    const ResetCounter = () =>{
        setNum (0);
    }

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/auth/${productId}`);
        dispatch(selectedProducts(response.data));
        setProductData(response.data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    if (productId && productId !== '') fetchProductDetail();
  }, [productId]);


  const { url, title, prize, category, description,rating } = productData || {};

  return (
    <>
      <section
        className="breadcrumb_section text-uppercase"
        style={{ backgroundImage: 'url("https:wallpapers-hub.art/wallpaper-images/343632.jpg")' }}
      >
        <div className="container">
          <h1 className="page_title text-white wow fadeInUp fadg" style={{ color: 'black' }}>
            About product
          </h1>
          <ul className="breadcrumb_nav ul_li wow fadeInUp fadg" >
            <li>
              <a href="index_1.html">
                <i className="fas fa-home"></i>Home
              </a>
            </li>
            <li>Our Shop</li>
          </ul>
        </div>
        <div className="breadcrumb_icon_wrap">
          <div className="container">
            <div className="breadcrumb_icon wow fadeInUp" ></div>
          </div>
        </div>
      </section>
      <br/>
      <br/>
        <div className="btns_group">
        <Link to="/Cart" style={{marginLeft:"100rem",fontSize:'10px'}}  className="btn btn_border border_black text-uppercase">
          <img src={cartg}/>
        </Link>
                       </div>
      <br/>
      <br/>
      <section class="details_section shop_details sec_ptb_120 bg_default_gray">
          <div class="container">
          	<div class="row justify-content-lg-between justify-content-md-center justify-content-sm-center">
          		<div class="col-lg-6 col-md-7">
          			<div class="details_image_wrap wow fadeInUp" >
          				<div class="details_image_carousel">
          					<div class="slider_item">
          						<img src={url} alt="image_not_found"/>
          					</div>
                  </div>
          			</div>
          		</div>

          		<div class="col-lg-6 col-md-7">
          			<div class="details_content wow fadeInUp" >
          				<div class="details_flex_title">
          					<h2 class="details_title text-uppercase">{title}</h2>
          					<div class="details_review">
          						<ul class="rating_star ul_li">
          							<li><i class="fas fa-star"><BsStarFill/></i></li>
          							<li><i class="fas fa-star"><BsStarFill/></i></li>
          							<li><i class="fas fa-star"><BsStarFill/></i></li>
          							<li><i class="fas fa-star"><BsStarFill/></i></li>
          							<li><i class="far fa-star"><BsStarHalf/></i></li>
          						</ul>
          						<span class="review_text">{rating} - Customar Review</span>
                      
          					</div>
          				</div>
          				<p>
                        {description}
          				</p>
          				<div class="details_price">
          					<strong class="price_text">${prize}</strong>
          					<span class="in_stuck"><i class="fal fa-check"></i> {category}</span>
          				</div>
          				<ul class="details_item_color ul_li">
          					<li class="bg_brown"><input type="radio" name="item_color"/></li>
          					<li class="bg_browndark"><input type="radio" name="item_color" checked/></li>
          					<li class="bg_brownlight"><input type="radio" name="item_color"/></li>
          				</ul>
          				<ul class="btns_group ul_li">
          					<li>
          						<div class="quantity_input quantity_boxed">
          							<h4 class="quantity_title text-uppercase">Quantity</h4>
          							<form action="#">
          								<button type="button" class="input_number_increment" onClick={CounterD}>-</button>
          								<input class="input_number" type="text" value={num}/>
          								<button type="button" class="input_number_decrement" onClick={CounterI}>+</button>
          							</form>
          						</div>
          					</li>
          					<li><a class="btn text-uppercase" style={{color:'black'}} href="#!"

                        onClick={() => {
                          dispatch(selectedCartPro(productData));
                        }}
                    
                    >Add To Cart</a></li>
          				</ul>
          				<div class="details_wishlist_btn">
          					<a href="#!"><i class="fas fa-heart mr-1"></i> Add to watch list</a>
          				</div>
          				<div class="details_share_links">
          					<h4 class="list_title"><i class="fas fa-share mr-1"></i> Share</h4>
          					<ul class="social_links social_icons ul_li">
          						<li><a href="#!"><i class="fab fa-facebook-f"></i></a></li>
          						<li><a href="#!"><i class="fab fa-twitter"></i></a></li>
          						<li><a href="#!"><i class="fab fa-instagram"></i></a></li>
          						<li><a href="#!"><i class="fab fa-youtube"></i></a></li>
          						<li><a href="#!"><i class="fab fa-behance"></i></a></li>
          					</ul>
          				</div>
          			</div>
          		</div>
          	</div>

          	<div class="product_description_wrap wow fadeInUp" >
          		<ul class="tabs_nav ul_li nav" role="tablist">
          			<li>
          				<button class="active" data-bs-toggle="tab" data-bs-target="#product_description" type="button" role="tab" aria-selected="true">Product Details</button>
          			</li>
          		</ul>
          		<div class="tab-content">
          			<div class="tab-pane fade show active" id="product_description" role="tabpanel">
          				<p class="mb-0">
                    {description}
          				</p>
          			</div>
          		</div>
          	</div>

          	<div className="related_products">
       <h4 className="area_title text-uppercase mb-0 wow fadeInUp" >Related Product</h4>
       <div className="row">
           <div className="col-lg-4 col-md-6 col-sm-6">
               <div className="shop_card wow fadeInUp" data-wow-delay=".2s">
                   <a className="wishlist_btn" href="#!"><i className="fal fa-heart"></i></a>
                   <div className="share_btns">
                       <button type="button" className="share_btn">
                           <i className="fal fa-share-alt"></i>
                       </button>
                       <ul className="ul_li">
                       <li><a href="#"><BsTwitter/></a></li>
                 <li><a href="#"><BsWhatsapp/></a></li>
                 <li><a href="#"><BsInstagram/></a></li>
                 <li><a href="#"><BsFacebook/></a></li>
                       </ul>
                   </div>
                   <a className="item_image" href="shop_details.html">
                       <img src={img} alt="image_not_found" width={250}/>
                   </a>
                   <div className="item_content">
                       <h3 className="item_title text-uppercase">
                           <a href="shop_details.html">Badmintton_Racqutes</a>
                       </h3>
                       <div className="btns_group">
                           <span className="item_price bg_default_brown">$101</span>
                           <a className="btn btn_border border_black text-uppercase" href="#!">Add To Cart</a>
                       </div>
                   </div>
               </div>
           </div>

           <div className="col-lg-4 col-md-6 col-sm-6">
               <div className="shop_card wow fadeInUp" >
                   <a className="wishlist_btn" href="#!"><i className="fal fa-heart"></i></a>
                   <div className="share_btns">
                       <button type="button" className="share_btn">
                           <i className="fal fa-share-alt"></i>
                       </button>
                       <ul className="ul_li">
                       <li><a href="#"><BsTwitter/></a></li>
                 <li><a href="#"><BsWhatsapp/></a></li>
                 <li><a href="#"><BsInstagram/></a></li>
                 <li><a href="#"><BsFacebook/></a></li>
                       </ul>
                   </div>
                   <a className="item_image" href="shop_details.html">
                       <img src={img2} alt="image_not_found" width={250}/>
                   </a>
                   <div className="item_content">
                       <h3 className="item_title text-uppercase">
                           <a href="shop_details.html">Badmintton Grips</a>
                       </h3>
                       <div className="btns_group">
                           <span className="item_price bg_default_brown">$101</span>
                           <a className="btn btn_border border_black text-uppercase" href="#!">Add To Cart</a>
                       </div>
                   </div>
               </div>
           </div>

           <div className="col-lg-4 col-md-6 col-sm-6">
               <div className="shop_card wow fadeInUp" >
                   <a className="wishlist_btn" href="#!"><i className="fal fa-heart"></i></a>
                   <div className="share_btns">
                       <button type="button" className="share_btn">
                           <i className="fal fa-share-alt"></i>
                       </button>
                       <ul className="ul_li">
                       <li><a href="#"><BsTwitter/></a></li>
                 <li><a href="#"><BsWhatsapp/></a></li>
                 <li><a href="#"><BsInstagram/></a></li>
                 <li><a href="#"><BsFacebook/></a></li>
                       </ul>
                   </div>
                   <a className="item_image" href="shop_details.html">
                       <img src={img3} alt="image_not_found" width={250}/>
                   </a>
                   <div className="item_content">
                       <h3 className="item_title text-uppercase">
                           <a href="shop_details.html">Badmintton_Nets</a>
                       </h3>
                       <div className="btns_group">
                           <span className="item_price bg_default_brown">$101</span>
                           <a className="btn btn_border border_black text-uppercase" href="#!">Add To Cart</a>
                       </div>
                       
                   </div>
               </div>
           </div>
       </div>
   </div>

          </div>
        </section>
      <Footer />
    </>
  );
};

export default Product_Det;
