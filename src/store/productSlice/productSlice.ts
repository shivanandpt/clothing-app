import { createSlice, isAction } from "@reduxjs/toolkit";
import { products } from "../../product/Product";

const initialState = {
    products: []
};
const sortProductsByOrder = (products, order) => {
    return [...products].sort((a, b) => order === 'low-to-high' ? a.price - b.price : b.price - a.price)
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            console.log('action.payload,',action.payload)
            state.products = sortProducts(action.payload, 'low-to-high');
        },

        sortProducts: (state, action) => {
            sortProductsByOrder(state.products, action.payload);
        },



        filterProduct: (state, action) => {
            switch (action.payload.field) {
                case 'collection':
                    state.products.filter((product) => product.collection === action.payload.filter);
                    break;
                default:
                    break;
            }
        },
    }
});

export const { sortProducts, filterProduct, setProducts } = productSlice.actions;
export default productSlice.reducer;