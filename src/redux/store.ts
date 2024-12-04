import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './productSlice/productSlice';
import CartItemReducer from './cartSlice/cartItemSlice';
import FilterReducer from './filterSlice/filterSlice'
const store = configureStore({
    reducer: {
        'products': ProductReducer,
        'cartItems': CartItemReducer,
        'filters': FilterReducer
    }
});

export default store;