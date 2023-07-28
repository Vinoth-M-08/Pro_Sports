import React from "react";
import pro from "../Assets/sports-tools.jpg";
import "./About.css"
import Footer from "../Footer/Footer";
function About() {
  return (
    <>
    <div className="img_wrrap">
        </div>
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${pro})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p className="Abt_cont">WHAT WE DO @ ProSports.IN

Hello  Strikers!

Let’s get going to dig out the best products in your game & make ‘em available right at your doorstep. We will be glad to serve you in any city in India & speedily, so that you enjoy your product in the coming weekend! All this, with no shipping charges if you purchase above Rs.1000.

Scout through your favourite brands with latest technologies. Just click & be its proud owner, at the best available price in the market. Come, help us help you to fly high with your new & improved game with high quality sportsgear!

Right from Racquets, Balls, Bats, Clubs to Shoes, Caps & other thousands of accessories, a wonderful selection awaits you to take a pick from. Give your wishlist to us & we will get you what you want.

Secure payment methods with seamless transactions & a commited helpline for all your queries.

Blog in to learn about your game & give your juniors a tip or two. Ask us to help you select your product, we will be glad to help you.

Hey kids – don’t despair!! Check out our Juniors section for a plethora of goods , just to suit you! There’s something for every sportsman in here.

Enjoy your game!

-Team ProSports.in
                    </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;