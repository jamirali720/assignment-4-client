import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import Card from "antd/es/card/Card";
import { useAppDispatch } from "../hooks/hooks";
import { setShippingInfo } from "../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../utils/CheckoutSteps";

type FieldType = {
  name?: string;
  email?: string;
  address?: string;
  city?: string;
  phoneNo?: string;
  zip?: string;
  country?: string;
  state?: string;
  pinCode?: string;
};

const Shipping: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    dispatch(setShippingInfo(values));
    form.resetFields(); // Clear form values after submission
    navigate("/order-summary");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="py-4">
      <div> <CheckoutSteps currentIndex={0}/></div>
      <Card
        title="Shipping Information"       
        className="w-screen sm:w-1/2 mx-auto"
      >
        <Form
          name="shippingInformation"
          labelCol={{ span: 6  }}
          wrapperCol={{ span: 26 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Phone Number"
            name="phoneNo"
            rules={[{ required: true, message: "Please input your phone!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="City"
            name="city"
            rules={[{ required: true, message: "Please input your city!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Country"
            name="country"
            rules={[{ required: true, message: "Please input your country!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Zip Code"
            name="zip"
            rules={[{ required: true, message: "Please input your zip!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="State"
            name="state"
            rules={[{ required: true, message: "Please input your state!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Pin Code"
            name="pinCode"
            rules={[{ required: true, message: "Please input pin code!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Shipping;
