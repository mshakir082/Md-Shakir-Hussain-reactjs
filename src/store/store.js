import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import productReducer from './productSlices'
import categoryReducer from './categoriesSlice'

const store=configureStore({
    reducer: {
        cart:cartReducer,
        product:productReducer,
        category:categoryReducer,
    }
})
export default store;