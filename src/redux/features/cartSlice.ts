import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { toast } from "sonner";
import { Inputs, ProductState } from "types/types";




const initialState: ProductState = {
  cartItems: [],
  totalAmount: 0,
  subtotal: 0,
  shippingInfo: {
    name: "",
    email: "",
    state: "",
    zip: "",
    country: "",
    phoneNo: "",
    address: "",
    city: "",
    pinCode: "",
  }, 
  shippingCharge: 0, 
  texCharge: 0,  
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const exists = state.cartItems.find(
        (item: Inputs) => item._id === payload._id
      );
      if (exists) {
        state.cartItems = state.cartItems.map((item: Inputs) =>
          item._id === payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        toast.success(
          `Cart ${payload.name} Item has been increased successfully`,
          {
            position: "top-center",
            duration: 1000,
          }
        );
      } else {
        state.cartItems.push({ ...payload, quantity: 1 });
        toast.success(`${payload.name} added successfully`, {
          position: "top-center",
          duration: 1000,
        });
      }
    },
    incrementItem: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item: Inputs) => {
        if (item._id === payload) {
          toast.success("Cart Item has been increased successfully", {
            position: "top-center",
            duration: 1000,
          });
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    },
    decrementItem: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item: Inputs) => {
        if (item._id === payload) {
          if (item.quantity > 1) {
            toast.success("Cart Item has been decreased successfully", {
              position: "top-center",
              duration: 1000,
            });
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
        }
        return item;
      });
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item: Inputs) => item._id !== payload
      );
      toast.success("Cart Item has been removed successfully", {
        position: "top-center",
        duration: 1000,
      });
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      // toast.success("Cart Items has been removed successfully", {
      //   position: "top-center",
      //   duration: 1000,
      // });
    },
    setTotalAmount: (state, action) => {
      state.totalAmount = action.payload.totalAmount;
      state.subtotal = action.payload.subtotal;
    },
    setCharge: (state, action) => {
      state.shippingCharge = action.payload.shippingCharge;
      state.texCharge = action.payload.texCharge;     
    },
    
    setShippingInfo: (state, action) => {
      const shippingObject = {
        name: action.payload.name,
        email: action.payload.email,
        state: action.payload.state,
        address: action.payload.address,
        city: action.payload.city,
        zip: action.payload.zip,
        country: action.payload.country,
        phoneNo: action.payload.phoneNo,
        pinCode: action.payload.pinCode,
      };
      state.shippingInfo = shippingObject;
    },    
  },
   
});

export const {
  addToCart,
  incrementItem,
  setTotalAmount,
  setShippingInfo,
  decrementItem,
  removeItem,
  clearCartItems,
  setCharge,
} = cartSlice.actions;
export default cartSlice.reducer;

export const cartItems = (state: RootState) => state.cart.cartItems;


