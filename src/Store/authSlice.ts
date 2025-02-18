import { createSlice } from '@reduxjs/toolkit';


const initialState ={
    token:null,
    status:false,

}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login :(state,action) =>{
            state.status=true;
            state.token = action.payload;
            
        },
        logout:(state)=>{
            state.status=false;
            state.token=null;
        }
    }
})

export const {login,logout} = authSlice.actions
export default authSlice.reducer