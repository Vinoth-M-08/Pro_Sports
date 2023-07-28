import { useSelector } from "react-redux"
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { BsTwitter,BsWhatsapp,BsInstagram ,BsFacebook,BsShareFill,BsHeartFill} from 'react-icons/bs';

import "./Products.css"
export const ProductListing = () =>
{
  const navigation=useNavigate()

    const products=useSelector((state)=>state.allProducts.products)
    const renderList=products.map((product)=>
    {
        const { id, title,description, url, prize, category,rating } = product;
        return(
      <div class="shop_filter_grid grid wow fadeInUp no" data-wow-delay=".3s"  key={id} onClick={()=>navigation("/product/"+id)}>
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
          				<a class="item_image">
          					<img src={url} alt="image_not_found" width={200}/>
          				</a>
          				<div class="item_content">
                          <h3 class="item_title text-uppercase">
                            <a href="shop_details.html">{title}</a>
                        </h3>
          					<div class="btns_group">
          						<span class="item_price bg_default_brown">${prize}</span>
          						<a class="btn btn_border border_black text-uppercase" href="#!">Add To Cart</a>
          					</div>
          				</div>
          			</div>
          		</div>
                </div>         
        );
    })
    return(
        <>
         {renderList} 
        </>
    )
}
export default ProductListing;