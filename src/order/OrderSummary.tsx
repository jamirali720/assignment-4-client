import { Card } from "antd";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutSteps from "../utils/CheckoutSteps";

import { Checkbox } from "antd";
import { setCharge } from "../redux/features/cartSlice";

const OrderSummary: React.FC = () => {
  const [value, setValue] = useState("payment");  
  const dispatch = useAppDispatch();
  const info = useAppSelector((state) => state.cart.shippingInfo);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  // const totalAmount = useAppSelector(state => state.cart.totalAmount);
  const shippingCharge = subtotal >= 5000 ? 100 : 200;
  const texCharge = subtotal * 0.1;
  const totalCharge = subtotal + shippingCharge + texCharge;

  const handlePaymentProcess = () => {
    dispatch(setCharge({shippingCharge, texCharge, totalCharge}))
    
  };

  const checkboxOptions = [
    {
      label: "Online Payment",
      value: "payment",
      
    },
    { label: "Cash On Delivery", value: "cash",  },
  ];
  console.log(value);

  return (
    <div>
      <div>
        <CheckoutSteps currentIndex={1} />{" "}
      </div>
      <div className="text-center my-3">
        <h1 className="text-red-500 text-3xl">Orders Summary</h1>
        <p className="text-2xl">Your order details </p>
      </div>
      <hr />
      <div className="md:flex justify-center justify-items-center md:p-8">
        <Card className="md:w-2/3" title=" Shipping Information">
          <div>
            <p>
              <strong>Name </strong>: {info.name}{" "}
            </p>
            <p>
              <strong>Email</strong> : {info.email}{" "}
            </p>
            <p>
              <strong>Phone </strong>: {info.phoneNo}{" "}
            </p>
            <p>
              <strong>Address </strong>: {info.address}{" "}
            </p>
          </div>
          <div className="my-5 mb-5 text-center">
            <h1 className="text-red-500 text-3xl"> Cart Items</h1>
          </div>
          <div className="my-5">
            <table className="w-full max-w-full">
              <thead className="w-full">
                <tr className="border border-slate-200 w-full ">
                  <th className="border border-slate-200 py-2">Image</th>
                  <th className="border border-slate-200">Name</th>
                  <th className="border border-slate-200">Quantity</th>
                  <th className="border border-slate-200">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems &&
                  cartItems.map((product, index) => {
                    return (
                      <tr
                        key={index}
                        className="border border-slate-200 text-center  h-16"
                      >
                        <td className="border border-slate-200 ">
                          <div className="w-20 h-20 mx-auto ">
                            <img
                              src={product.image.url}
                              alt={product.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </td>
                        <td className="border border-slate-200">
                          <p>{product.name}</p>
                        </td>

                        <td className="border border-slate-200">
                          <span>$ {product.quantity}</span>
                        </td>

                        <td className="border border-slate-200">
                          <span>$ {product.quantity * product.price}</span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </Card>
        <div className="md:w-1/3">
          <Card className=" h-full  mx-2 " title="Order Summery">
            <div className="my-2 flex justify-between justify-items-center px-4">
              <span> Subtotal </span>
              <span>$ {subtotal.toFixed(2)}</span>
            </div>
            <div className="my-2 flex justify-between justify-items-center px-4">
              <span> Shipping </span>
              <span>$ {shippingCharge.toFixed(2)}</span>
            </div>
            <div className="my-2 flex justify-between justify-items-center px-4">
              <span> Tex </span>
              <span>$ {texCharge.toFixed(2)}</span>
            </div>
            <div className="my-3 px-4">
              <hr />
            </div>

            <div className="my-2 flex justify-between justify-items-center px-4 mb-5">
              <span>Total</span>$ {totalCharge.toFixed(2)}
            </div>

            {/* payment method selection  */}
            <div  className="my-10">
              <h1 className="text-2xl font-semibold">Please Select Payment Method:</h1>
              {checkboxOptions.map((item, index) => (
                <div key={index} className="my-5 font-semibold">
                  <Checkbox
                    value={item.value}
                    onChange={(e) => setValue(e.target.value)}
                    checked={item.value === value}
                  >
                    {item.label}
                  </Checkbox>
                </div>
              ))}
            </div>
            <div className="bg-red-200 md: my-32">
              <Link
                to={`/${value}`}
                className="block  text-[#F45634] font-semibold text-2xl "
              >
                <button
                  onClick={() => handlePaymentProcess()}
                  className="bg-slate-100 float-end  hover:bg-slate-200  ease-in-out duration-300  px-5 w-full py-2 pb-3 rounded-full "
                >
                  process payment
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
