import "./Cart.css"
import pro from "../Assets/soprts-tools1.jpg";
import { FaShoppingCart,FaTrash } from 'react-icons/fa';
import icon from "../Assets/Pro_1.png"
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import { Items } from "../Datas";
function Cart() {

	const [num, setNum] = useState(1);
	const [totalPrice, setTotalPrice] = useState(0);
	
    const CounterI = () => {
		setNum (num+1);   
    }
    const CounterD = () => {
		setNum (num-1);
    }
    const ResetCounter = () =>{
		setNum (0);
    }

	const prod=useSelector(state=>state.selectedproductcart.cart_prod);
	const [cartItems, setCartItems] = useState(prod);
	console.log(prod);
	console.log("hii",cartItems);
	let arr=[];
    
    for(let key in prod){
        arr.push([key,prod[key]]);
    }
	arr.push(prod);
	// console.log(typeof prod)
	
	useEffect(() => {
		let total = 0;
		for (let i = 0; i < cartItems.length; i++) {
		  total += cartItems[i].prize;
		}
		setTotalPrice(total);
	  }, [cartItems]);
console.log(totalPrice)

const handleRemoveItem = (itemId) => {
    // const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    // const removedItem = cartItems.find((item) => item.id === itemId);
    // setTotalPrice((prevTotal) => prevTotal - removedItem.prize);
    // setCartItems(updatedCartItems);
  };
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
				{prod.map((item)=>
								<tbody>
									<tr class="wow fadeInUp" data-wow-delay=".1s">
										<td>
											<div class="carttable_product_item">
												<div class="item_image">
													<img src={item.url} alt="image_not_found" width={'60px'}/>
												</div>
												{/* <button type="button" class="remove_btn"><i class="fal fa-times"></i></button> */}
												<h3 class="item_title">{item.title}</h3>
											</div>
										</td>
										<td><span class="price_text1">₹{item.prize}</span></td>
										<td>
											<div class="quantity_input">
												<form action="#">
												<button type="button" class="input_number_increment" onClick={CounterD}>-</button>
          								<input class="input_number" type="text" value={num}/>
          								<button type="button" class="input_number_decrement" onClick={CounterI}>+</button>
												</form>
											</div>
										</td>
										<td><span class="price_text2">₹{item.prize*num}</span></td>
									</tr>
                  </tbody>
									)}
                  </table>
                  </div>
                  </div>
                  </section>
                  </div>
                  <div className="btu">
                  <ul class="carttable_footer ul_li_right wow fadeInUp" data-wow-delay=".1s">
							<li>
								<div class="total_price text-uppercase">
									<span>total</span>
									<span>{totalPrice}</span>
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