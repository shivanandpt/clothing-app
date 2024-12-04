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
        increaseQuantity: (state, action) => {
            state.cartItems = state.cartItems.map(cartItem => cartItem.id === action.payload ? { ...cartItem, quantity: (cartItem.quantity + 1) } : cartItem)
        },
        decreaseQuantity: (state, action) => {
            state.cartItems = state.cartItems.map(cartItem => {
                if (cartItem.id === action.payload) {
                    const quantity = cartItem.quantity > 1 ? (cartItem.quantity - 1) : 0;
                    return { ...cartItem, quantity }
                }
                return cartItem
            });
            state.cartItems = state.cartItems.filter(cartItem => cartItem.quantity !== 0)
        }
    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartItemSlice.actions;
export default cartItemSlice.reducer;