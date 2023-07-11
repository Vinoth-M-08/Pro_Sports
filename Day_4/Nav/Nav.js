import logo from "../Assets/logo1.png"
import "../Assets/Combined.css"
import "./Nav.css"
import { Link } from "react-router-dom";
function Nav() {
    return ( <>
      <img src={logo} height={70} style={{marginLeft:80,marginBottom:-80}}/>
    <header class="header_section">
      
        <div class="content_wrap">
          <div class="container maxw_1560">
            <div class="row align-items-center">

              <div class="col-lg-2 col-md-6 col-6">
                
              </div>

              <div class="col-lg-10 col-md-6 col-6">
                <nav class="main_menu navbar navbar-expand-lg">
                  
                  <div class="main_menu_inner collapse navbar-collapse" id="main_menu_dropdown">
                    <ul class="main_menu_list ul_li">
                      <li class="active dropdown">
                        <a class="nav-link" href="#" id="home_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Home
                        </a>
                        <ul class="submenu dropdown-menu" aria-labelledby="home_submenu">
                          <li><a href="index_1.html">Home</a></li>
                          <li><a href="index_2.html">Cricket</a></li>
                          <li><a href="index_3.html">Badmintton</a></li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a class="nav-link" href="#" id="about_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                        <ul class="submenu dropdown-menu" aria-labelledby="about_submenu">
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="about_2.html">About Me</a></li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a class="nav-link" href="#" id="portfolio_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          shop
                        </a>
                        <ul class="submenu dropdown-menu" aria-labelledby="portfolio_submenu">
                          <li><a href="shop.html">Shop</a></li>
                          <li><a href="shop_details.html">Shop Details</a></li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a class="nav-link" href="#" id="services_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Pages
                        </a>
                        <ul class="submenu dropdown-menu" aria-labelledby="services_submenu">
                          <li><a href="menu.html">Jersy</a></li>
                          <li><a href="cart.html">Cart</a></li>
                          <li class="dropdown">
                          	<a href="#" id="checkout_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">Checkout</a>
                          	<ul class="submenu dropdown-menu" aria-labelledby="checkout_submenu">
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
                      <li class="dropdown">
                        <a class="nav-link" href="#" id="experience_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Blog
                        </a>
                        <ul class="submenu dropdown-menu" aria-labelledby="experience_submenu">
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="blog_details.html">Blog Details</a></li>
                        </ul>
                      </li>
                      <li>
                      
                        <a class="nav-link">  <Link to="/login" element={<Nav/>}>Login</Link></a>
                      </li>
                    </ul>
                  </div>
                  
                  <input type="text" id="search-bar" style={{width:500}} placeholder="What can I help you with today?"/>

                  <ul class="header_btns_group ul_li_right">
                  
                    <li>
                      <a class="btn btn_primary text-uppercase" href="contact.html">Cart</a>
                    </li>
                    
                  </ul>
                </nav>
              </div>

            </div>
          </div>
      
        </div>
        <div class="main_search_collapse collapse" id="main_search_collapse">
          <div class="main_search_form card">
            <div class="container maxw_1560">
              <form action="#">
                <div class="form_item">
                  <input type="search" name="search" placeholder="Search here..."/>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
        <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
      </header>
    </> );
}

export default Nav;