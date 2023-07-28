import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import Products from './Products';
import { ProductListing } from './ProductListing';
import {setProducts} from "../Redux_Up/Actions/ProductActions"

const ProductComp=()=> {
    const products =useSelector((state)=>state);
    const dispatch=useDispatch();


useEffect(() => {
 const FetchProducts = async () =>
 {
    const response = await axios.get("http://localhost:8080/auth/getProduct")
    .catch((err)=>
    {
        console.log("Err",err)
    });
    dispatch(setProducts(response.data))
};

    FetchProducts();
}, []);

    return ( <>
    <ProductListing/>
    </> );
}

export default ProductComp;