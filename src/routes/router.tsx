import { createBrowserRouter } from "react-router-dom";


import Products from "../products/Products";
import ProductDetails from './../products/ProductDetails';
import Cart from "../cart/Cart";
import Payment from "../payment/Payment";
import Checkout from "../payment/Checkout";
import App from "../App";
import AddProducts from './../management/AddProducts';
import Add from './../management/Add';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products/>,
  },
  {
    path: "/add-product",
    element: <Add/>,
  },
  {
    path: "/product-details",
    element:<ProductDetails/> ,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/payment",
    element: <Payment/> ,
  },
  {
    path: "/checkout",
    element:<Checkout/> ,
  },
]);
