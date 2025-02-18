import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../Store/authSlice'
import profileReducer from '../Store/profileSlice'
import counterReducer from '../Store/counterSlice'
import cartReducer from '../Store/cartSlice'
export default configureStore({
    reducer:{
        auth:authReducer,
        profileDetails:profileReducer,
        counter:counterReducer,
        cartItem:cartReducer,

    },
})