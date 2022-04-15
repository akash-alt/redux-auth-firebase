
// ****** Note  *******//
// configureStore does allSlice called or combine automatically
// this is main (store)

import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./auth-slice"

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})
export default store;