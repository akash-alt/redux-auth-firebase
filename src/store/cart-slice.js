import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemList: [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            // to check item is existing or not
            const existingItem = state.itemList.find((item) => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price
            } else {
                // here i am updating value in cart by name & all
                state.itemList.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
                state.totalQuantity++ // we are pushing here for cart
            }
        },
        removeFromCart() {

        },
        showtoCart(state) {
            state.showCart = true
        }
    }
}
)

export const cartActons = cartSlice.actions;
export default cartSlice;