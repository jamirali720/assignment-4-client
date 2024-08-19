import { createBrowserRouter } from "react-router-dom";

import Products from "../products/Products";
import ProductDetails from "./../products/ProductDetails";
import Cart from "../cart/Cart";
import Payment from "../payment/Payment";
// import Checkout from "../payment/Checkout";
import App from "../App";

import AddProducts from "../management/AddProducts";
import Home from "../home/Home";
import ProductManagement from "../management/ProductManagement";
import Shipping from "../shipping/Shipping";
import ConfirmOrders from "../order/OrderSummary";
import AllProducts from "../management/AllProducts";
import UpdateProducts from "../management/UpdateProducts";
import AllOrders from "../order/AllOrders";

import UpdateOrder from "../order/UpdateOrder";
import CashOnDelivery from "../payment/CashOnDelivery";
import CarouselImageUpload from "../heroSection/CarouselImageUpload";
import PaymentSuccess from "../payment/PaymentSuccess";
import About from "../about/About";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "carousel",
        element: <CarouselImageUpload />,
      },

      {
        path: "product-details/:productId",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "payment/success",
        element: <PaymentSuccess />,
      },
      {
        path: "shipment",
        element: <Shipping />,
      },
      {
        path: "cash",
        element: <CashOnDelivery />,
      },
      {
        path: "order-summary",
        element: <ConfirmOrders />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "manage-products",
        element: <ProductManagement />,
        children: [
          {
            path: "",
            element: <AddProducts />,
          },
          {
            path: "all-products",
            element: <AllProducts />,
          },
          {
            path: "update-product/:productId",
            element: <UpdateProducts />,
          },
          {
            path: "orders",
            element: <AllOrders />,
          },
          {
            path: "orders/:orderId",
            element: <UpdateOrder />,
          },
        ],
      },
    ],
  },
]);
