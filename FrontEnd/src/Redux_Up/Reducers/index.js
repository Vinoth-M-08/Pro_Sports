import { combineReducers } from "redux";
import { productsReducer,selectedCart,selectedProductReducer } from "./ProductReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductReducer,
  selectedproductcart:selectedCart
});
  export default reducers;