import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
    name: 'cartItems',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload)
        },
    }
});

export const { addToCart, removeFromCart } = cartItemSlice.actions;
export default cartItemSlice.reducer;