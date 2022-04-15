
// ****** Note  ****//
// here we are going to used redux for checking login and logout 
// in redux the data are mutate ...that means we can not change so for that 
// we have to 1st copy it then it will change or manipulate values
// in your mind when you are going to define initial value then you have to assign values
// or else it will show error

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedin: false },
    reducers: {
        login(state) {
            state.isLoggedin = true
        },
        logout(state) {
            state.isLoggedin = false
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice;
