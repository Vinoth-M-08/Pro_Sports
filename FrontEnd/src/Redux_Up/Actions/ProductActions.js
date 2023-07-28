import { ActionTypes } from "../Constants/Action-type";
export const setProducts = (products) => {
    return {
      type: ActionTypes.SET_PRODUCTS,
      payload: products,
    };
  };
console.log(setProducts);
export const selectedProducts=(product)=>{
    return{
        type : ActionTypes.SELECTED_PRODUCT,
        payload:product,
    };
};
export const selectedCartPro = (selectedCartPro)=>
{
  return{
    type:ActionTypes.SELECTED_CART,
    payload:selectedCartPro,
  }
}
