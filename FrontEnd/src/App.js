import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import About from './About/About';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Product_Grid from './Products/Product_Grid';
import { useEffect } from 'react';
import axios from 'axios';
import Product_Det from './Products/Product_Det';
import ProductListing from './Products/ProductListing';
import ProductComp from './Products/ProductComponent';
import Signup from './Logins/SignUp';
import Login33 from './Logins/login';


function App() {

  // useEffect(()=>{
    
  //     fetch("http://localhost:8080/")
  //     .then(res=>res.json())
  //     .then(json=>console.log(json));
  // },[])
  return (
    <>
    <Routes>
      
       <Route path="/" element={<Nav/>}></Route> 
      <Route path="/login" element={<Login33/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/Products" element={<Product_Grid/>}></Route> 
    <Route path="/SignUp" element={<Signup/>}></Route> 
    <Route path="/Login" element={<Login33/>}></Route> 
    <Route path="/product/:productId" element={<Product_Det/>} /> 
    <Route path="/Cart" element={<Cart/>}></Route>
          
    </Routes>
    </>
  );
}

export default App;
