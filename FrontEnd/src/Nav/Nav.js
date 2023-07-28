import logo from "../Assets/logo1.png"
import "../Assets/Combined.css"
import "./Nav.css"
import { Link } from "react-router-dom";
import Home from "../HomePage/Home";
import { BsCartDash } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
function Nav() {
  
    return ( <>
      <img src={logo} height={70} style={{marginLeft:80,marginBottom:-80}}/>
    <header className="header_section">
      
        <div className="content_wrap">
          <div className="containere maxw_1560">
            <div className="row align-items-center">

              <div className="col-lg-2 col-md-6 col-6">
                
              </div>

              <div className="col-lg-10 col-md-6 col-6">
                <nav className="main_menu navbar navbar-expand-lg">
                  
                  <div className="main_menu_inner collapse navbar-collapse" id="main_menu_dropdown">
                    <ul className="main_menu_list ul_li">
                      <li className="active dropdown">
                        <a className="nav-link" href="#" id="home_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Home
                        </a>
                        <ul className="submenu dropdown-menu" aria-labelledby="home_submenu">
                          <li><a href="index_1.html">Home</a></li>
                          <li><a href="index_2.html">Cricket</a></li>
                          <li><a href="index_3.html">Badmintton</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="nav-link" href="#" id="about_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                        <ul className="submenu dropdown-menu" aria-labelledby="about_submenu">
                          <li><a href="/About">About Us</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="nav-link" href="#" id="portfolio_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          shop
                        </a>
                        <ul className="submenu dropdown-menu" aria-labelledby="portfolio_submenu">
                          <li><a href="shop.html">Shop</a></li>
                          <li><a href="shop_details.html">Shop Details</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="nav-link" href="/Products" id="services_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Products
                        </a>
                        <ul className="submenu dropdown-menu" aria-labelledby="services_submenu">
                          <li><a href="menu.html">Jersy</a></li>
                          <li><a href="cart.html">Cart</a></li>
                          <li className="dropdown">
                          	<a href="#" id="checkout_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cricket</a>
                          	<ul className="submenu dropdown-menu" aria-labelledby="checkout_submenu">
                          		<li><a href="checkout.html">Bat</a></li>
                          		<li><a href="checkout_step2.html">Kits</a></li>
                          		<li><a href="checkout_step3.html">Balls</a></li>
                          		<li><a href="checkout_step3.html">Accessories</a></li>
                          		<li><a href="checkout_step3.html">Stumps</a></li>
                          		<li><a href="checkout_step3.html">Net</a></li>
                          		<li><a href="checkout_step3.html">Pads</a></li>
                          		<li><a href="checkout_step3.html">Helmets</a></li>
                          	</ul>
                          </li>
                          <li className="dropdown">
                          	<a href="#" id="checkout_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">Badmintton</a>
                          	<ul className="submenu dropdown-menu" aria-labelledby="checkout_submenu">
                          		<li><a href="checkout.html">Racquets</a></li>
                          		<li><a href="checkout_step2.html">Checkout Step 2</a></li>
                          		<li><a href="checkout_step3.html">Checkout Step 3</a></li>
                          	</ul>
                          </li>
                          <li className="dropdown">
                          	<a href="#" id="checkout_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">FootBall</a>
                          	<ul className="submenu dropdown-menu" aria-labelledby="checkout_submenu">
                          		<li><a href="checkout.html">Checkout Step 1</a></li>
                          		<li><a href="checkout_step2.html">Checkout Step 2</a></li>
                          		<li><a href="checkout_step3.html">Checkout Step 3</a></li>
                          	</ul>
                          </li>
                          <li className="dropdown">
                          	<a href="#" id="checkout_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tennis</a>
                          	<ul className="submenu dropdown-menu" aria-labelledby="checkout_submenu">
                          		<li><a href="checkout.html">Checkout Step 1</a></li>
                          		<li><a href="checkout_step2.html">Checkout Step 2</a></li>
                          		<li><a href="checkout_step3.html">Checkout Step 3</a></li>
                          	</ul>
                          </li>
                          <li><a href="faq.html">F.A.Q.</a></li>
                          <li><a href="reserve_table.html">Reserve Table</a></li>
                          <li><a href="reservation_form.html">Reservation Form</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a className="nav-link" href="#" id="experience_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Blog
                        </a>
                        <ul className="submenu dropdown-menu" aria-labelledby="experience_submenu">
                          <li><a href="/Contact">Contact</a></li>
            
                        </ul>
                      </li>
                      <li>
                      
                        <a className="nav-link">  
                        {/* <Link to="/login" element={<Nav/>}>Login</Link> */}
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <input type="text" id="search-bar" style={{width:500}} placeholder="What can I help you with today?"/>

                  <ul className="header_btns_group ul_li_right">
                  
                    <li>
                    <a href="/CART" style={{marginLeft:"30px"}}><BsCartDash color="black" size={'30px'}/></a>
                    </li>
                  </ul>
                      <a style={{color:"black",marginLeft:"20px"}}href="/Login"><CgProfile size={33}/></a>
                </nav>
              </div>

            </div>
          </div>
      
        </div>
        <div className="main_search_collapse collapse" id="main_search_collapse">
          <div className="main_search_form card">
            <div className="container maxw_1560">
              <form action="#">
                <div className="form_item">
                  <input type="search" name="search" placeholder="Search here..."/>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
        <a href="#"><div className="search-icon"/></a>
      </header>
      <Home/>
    </> );
}

export default Nav;