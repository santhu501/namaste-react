import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // Mutating the state.
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; // or state.items = [];  
            // To print the state on console in a redux toolkit, we have to use current method.
            // console.log(current(state));
            // using console.log(state); will only print proxy object without actual state object.
            // Redux toolkit requires mutating the existing state or return a new state.
            // return [];  this will also clear the cart.
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;