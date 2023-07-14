import "./Cart.css"
import pro from "../Assets/soprts-tools1.jpg";
import { FaShoppingCart } from 'react-icons/fa';
import icon from "../Assets/Pro_1.png"
import Footer from "../Footer/Footer";
function Cart() {
    return ( <>
    <div className="img_wrrap">
        </div>
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${pro})` }}
        ></div>
        <h3 className="car_h3">Shoping cart</h3>
        <div className="car_ic">
        <FaShoppingCart size={75} color="white"/>
      </div>
        </div>
        <div className="ttt">
      <section class="cart_section sec_ptb_120 bg_default_gray movv">
					<div class="container coon">
						<div class="cart_table">
							<table class="table">
								<thead class="text-uppercase wow fadeInUp" data-wow-delay=".1s">
									<tr>
										<th>Product</th>
										<th>Price</th>
										<th>Quantity</th>
										<th>subtotal</th>
									</tr>
								</thead>
								<tbody>
									<tr class="wow fadeInUp" data-wow-delay=".1s">
										<td>
											<div class="carttable_product_item">
												<div class="item_image">
													<img src={icon} alt="image_not_found"/>
												</div>
												<button type="button" class="remove_btn"><i class="fal fa-times"></i></button>
												<h3 class="item_title">SG Bat</h3>
											</div>
										</td>
										<td><span class="price_text1">₹1900</span></td>
										<td>
											<div class="quantity_input">
												<form action="#">
													<button type="button" class="input_number_decrement">–</button>
													<input class="input_number" type="text" value="2"/>
													<button type="button" class="input_number_increment">+</button>
												</form>
											</div>
										</td>
										<td><span class="price_text2">₹3800</span></td>
									</tr>
                  </tbody>
                  </table>
                  </div>
                  </div>
                  </section>
                  </div>
                  <div className="btu">
                  <ul class="carttable_footer ul_li_right wow fadeInUp" data-wow-delay=".1s">
							<li>
								<div class="total_price text-uppercase">
									<span>Subtotal</span>
									<span>₹3800</span>
								</div>
							</li>
							<li>
								<div class="total_price text-uppercase">
									<span>total</span>
									<span>₹3800</span>
								</div>
							</li>
							<li>
								<a class="btn btn_primary text-uppercase" href="shop_checkout.html">procced to checkout</a>
							</li>
						</ul>
            </div>
            <Footer/>
    </> );
}

export default Cart;