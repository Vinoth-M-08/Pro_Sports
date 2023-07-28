import { ActionTypes } from "../Constants/Action-type";

const intialState = {
    products: [],
  };
  
  export const productsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_PRODUCTS:
        return {...state,products:payload};
      default:
        return state;
    }
  };
  
  export const selectedProductReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
        return {...state,products:payload};
      default:
        return state;
    }
  };

  const displayCart={
    cart_prod:[],
  }

  export const selectedCart = (state=displayCart,{type,payload})=>
  {
    switch(type)
    {
      case ActionTypes.SELECTED_CART:
        return {...state,cart_prod:[...state.cart_prod,payload]}
        default:
          return state;
    }
  }
  

