export type TProduct = {
  _id?: string;
  id?: string;
  name: string;
  category: string;
  description: string;
  price: string;
  stock: string;  
  brand: string;
  ratings: string;
  image: string;
  reviews?: [{ name: string; email: string; comment: string; rating: string }];
};

export type TProductResponse = {
  _id?: string;
  name: string;
  category: string;
  description: string;
  price: number;
  stock: number;  
  quantity: number;  
  brand: string;
  ratings: number;
  image: {
    url: string;
    public_id: string;
  };
  reviews?: [{ name: string; email: string; comment: string; rating: number }];
};

export type TResponse = {
  data: TProductResponse[];
  statusCode: number;
  message: string | null;
  success: boolean;
};
export type TSingleResponse = {
  data: TProductResponse;
  statusCode: number;
  message: string | null;
  success: boolean;
};

export type Inputs = {
  _id?: string;
  id?: string;
  name: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  stock: number;  
  brand: string;
  ratings: number;
  image: {
    url: string;
    public_id: string;
  };
  reviews?: [{ name: string; email: string; comment: string; rating: number }];
};

export interface IShippingInfo{
    name: string;
    email:string;
    state: string;
    zip: string;
    country: string;
    phoneNo: string;
    address: string;
    city:string;
    pinCode: string

  }
 

export interface ProductState {
  cartItems: Inputs[];
  totalAmount: number;
  subtotal:number;
  shippingInfo: IShippingInfo;
  shippingCharge: number;
  texCharge: number;
}

export interface IErrorResponse {
  error?: string;
  status: number;
  data: { [key: string]: string | number | boolean | Array<object> };
}

export type TQuery = {
  name?: string;
  page?: number;
  limit?: number;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  brand?: string;
  ratings?: number;
  sort?: string;
  reviews?: [{ name: string; email: string; comment: string; rating: number }];
};

export type TReview = {   
  _id?:string;
  name: string;
  email: string;
  comment: string;
  rating: number;
};


export interface ITheme {
  theme: "flat" | "stripe" | "night" | undefined
}

export type TLayout = {
  layout: "tabs";
};

export type TContact = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type TOrder = {
  shippingInfo: IShippingInfo;
  orderItems: Inputs[];
  email: string;
  totalAmount: number;
  itemPrice: number;  
  texPrice: number;
  shippingPrice: number;
  paymentInfo: { id: string; status: string };
};