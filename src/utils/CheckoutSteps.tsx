import { Steps } from "antd";

import { MdLocalShipping, MdOutlinePayment } from "react-icons/md";
 import { GiConfirmed } from "react-icons/gi";

type TProps = {
    currentIndex: number;
}
const CheckoutSteps = ({ currentIndex }: TProps) => {
  return (
    <Steps
      current={currentIndex}
      className="w-full h-auto md:max-h-14 px-4 my-3"
      items={[
        {
          title: <MdLocalShipping color="red" size={25} />,
          description: "Shipping Details",
        },
        {
          title: <GiConfirmed color="red" size={25} />,
          description: "Confirm Order",
        },
        {
          title: <MdOutlinePayment color="red" size={25} />,
          description: "Payment",
        },
      ]}
    />
  );
};

export default CheckoutSteps;