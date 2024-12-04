import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        filters: {
            gender: [],
            category: [],
            brand: [],
            size: [],
            color: [],
            material: [],
        }
    },
    reducers: {
        toggleFilter: (state, action) => {
            const filterExists = state.filters[action.payload.key].includes(action.payload.value);

            if (filterExists) {
                state.filters[action.payload.key] = state.filters[action.payload.key].filter((f) => f !== action.payload.value);
            }
            else {
                state.filters[action.payload.key].push(action.payload.value);
            }
        }
    },
});
export const { toggleFilter } = filterSlice.actions;
export default filterSlice.reducer