import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login/Login';
import Forget from './Login/Forget';
import Nav from './Nav/Nav';
import { BrowserRouter } from 'react-router-dom';
import Home from './HomePage/Home';
import Footer from './Footer/Footer';
import Products from './Products/Products';
import About from './About/About';
//import SimpleSlider from './Try';
import { Provider } from 'react-redux';
import store from './Redux_Up/Reducers/Store';
import ProductComp from './Products/ProductComponent';
import { ProductListing } from './Products/ProductListing';
import CommentsForms from './MicroService/Micro';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
       <App/>
      </Provider>
    </BrowserRouter>
  /* </React.StrictMode> */

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
