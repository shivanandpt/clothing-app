import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './productSlice/productSlice';
import CartItemReducer from './cartSlice/cartItemSlice';
const store = configureStore({
    reducer: {
        'products': ProductReducer,
        'cartItems': CartItemReducer,
    }
});

export default store;