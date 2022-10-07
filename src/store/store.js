import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './shoppingcard/cartSlice';
import cartUiSlice from "./shoppingcard/cartUiSlice";


const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer,
    },
});

export default store;