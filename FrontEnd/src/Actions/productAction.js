// import axios from "axios"
// import { productsFail, productsRequest, productsSuccess } from "../Redux_Slices/ProductSlice";
// export const getProducts=async(dispatch)=>
// {
//     try {
//         dispatch(productsRequest())
//        const {data} = await axios.get('http://localhost:8080/');
//        console.log(data);
//         dispatch(productsSuccess(data))
//     } catch (error) {
//         dispatch(productsFail(error.response.data.message))
//     }
// }