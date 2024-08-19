import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateOrderMutation } from '../redux/api/orderApi';
import { toast } from 'sonner';
import CheckoutSteps from '../utils/CheckoutSteps';
import { AiFillCheckCircle } from 'react-icons/ai';
import { clearCartItems } from '../redux/features/cartSlice';

const PaymentSuccess:React.FC = () => {
    const location  = useLocation();
    const paymentId = new URLSearchParams(location.search).get(
      "payment_intent"
    );
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const paymentStatus = new URLSearchParams(location.search).get("redirect_status");
     const totalAmount = useAppSelector((state) => state.cart.totalAmount);
     const { cartItems, shippingInfo, subtotal, shippingCharge, texCharge } =
       useAppSelector((state) => state.cart);    
     const [createOrder, { isSuccess }] = useCreateOrderMutation();

     const orderItems = cartItems.map((cartItem) => {
       return {
         name: cartItem.name,
         productId: cartItem._id,
         quantity: cartItem.quantity,
         price: cartItem.price,
         image: cartItem.image.url,
       };
     });

     const order = {
       shippingInfo,
       orderItems: orderItems,
       email: shippingInfo.email,
       itemPrice: subtotal,
       shippingPrice: shippingCharge,
       texPrice: texCharge,
       totalAmount,
       paymentInfo: {
         id: paymentId,
         status: paymentStatus,
       },
     };
  const handleBackToHome = async () => {
    try {
      await createOrder(order);
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      toast.success(
        "Success! You have successfully confirmed your order",
        { position: "top-center", duration: 5000 }
      );
      dispatch(clearCartItems());
    }
  }, [isSuccess, navigate, dispatch]);
     

    


    return (
      <div className="w-full max-w-full h-screen ">
        <CheckoutSteps currentIndex={3} />
        <div className="w-screen h-full flex justify-center justify-items-center">
          <div className="flex items-center">
            <div className="border p-6 shadow-lg ">
              <AiFillCheckCircle
                className="my-5  mx-auto"
                color="green"
                size={70}
              />
              <h3 className="my-3 text-3xl font-semibold text-center">
                Thank you for payment of your order!
              </h3>
              <p className="my-2 text-center">
                Your order is being processed and will be delivered as fast as
                possible.
              </p>
              <div className="text-center">
                <button
                disabled ={isSuccess}
                  className="w-64 h-10 rounded-sm bg-red-400 hover:bg-red-500 transition-all duration-300 ease-linear text-white font-semibold my-5"
                  onClick={handleBackToHome}
                >
                 Click To Complete Your Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PaymentSuccess;