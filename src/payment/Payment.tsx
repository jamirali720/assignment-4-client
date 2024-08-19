import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/hooks";
import { ITheme } from "types/types";
import Spinner from "../utils/Spinner";

const initStripe = async () => {
  // Retrieve the publishable key from backend
  const publishableKey = await fetch(
    "http://localhost:5000/api/sports/publishable-key"
  );
  const response = await publishableKey.json();
  return loadStripe(response.publishableKey);
};

const Payment = () => {
  const [clientSecretSetting, setClientSecretSetting] = useState({
    clientSecret: "",
    loading: true,
  });
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  const stripePromise = initStripe();

  useEffect(() => {
    const getClientSecret = async () => {
      const clientSecret = await fetch(
        "http://localhost:5000/api/sports/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: totalAmount * 100,
          }),
        }
      );
      const response = await clientSecret.json();

      if (response.clientSecret) {
        setClientSecretSetting({
          clientSecret: response.clientSecret,
          loading: false,
        });
      }
    };
    getClientSecret();
  }, [totalAmount]);

  if (!clientSecretSetting.clientSecret) {
    return;
  }

  const appearance: ITheme = {
    theme: "stripe",
  };
  const options = {
    clientSecret: clientSecretSetting.clientSecret,
    appearance,
  };

  return (
    <>
      {clientSecretSetting.loading ? (
        <div className="w-full h-screen flex justify-center justify-items-center">        
          <div className="flex justify-center justify-items-center">
            <Spinner />
          </div>
        </div>
      ) : (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Payment;
