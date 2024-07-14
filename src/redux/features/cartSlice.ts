import { createSlice } from '@reduxjs/toolkit'
import { ProductState, TProduct } from 'types/types';
// import type { PayloadAction } from '@reduxjs/toolkit'



const initialState:ProductState = {
    cartItems:[] 
}


const cartSlice = createSlice({
    name: 'cart', 
    initialState, 
    reducers: {
        addToCart: (state, {payload} ) => {
            const exists = state.cartItems.find((item :TProduct) => item.id === payload.id);
            if(exists) {
                state.cartItems= state.cartItems.filter((item:TProduct)=> item.id === payload.id ? {...item, quantity: item.quantity + 1} : item)
            }else {
                state.cartItems.push({...payload, quantity: 1})
            }

        }, 
        incrementItem : (state, {payload}) => {
            state.cartItems = state.cartItems.map((item :TProduct) => {
                if(item.id === payload){
                    return {
                        ...item, 
                        quantity: item.quantity + 1
                    }
                }
                return item;
            })
        }, 
        decrementItem : (state, {payload} )=> {
          state.cartItems = state.cartItems.map((item :TProduct)=> {
            if(item.id === payload){
                if(item.quantity > 1) {
                    return {
                        ...item, 
                        quantity: item.quantity -1
                    }
                }
            }
            return item;
          })  
            
        }, 
        removeItem : (state, {payload}) => {
            state.cartItems = state.cartItems.filter((item :TProduct) => item.id !== payload);
        }, 
        clearCartItems : (state) => {
            state.cartItems = []
        }
    }, 
})


export const {addToCart, incrementItem, decrementItem, removeItem, clearCartItems} = cartSlice.actions;
export default cartSlice.reducer;