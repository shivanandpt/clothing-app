import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './productSlice/productSlice';
const store = configureStore({
    reducer: {
        'products': ProductReducer
    }
});

export default  store;