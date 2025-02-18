import { createSlice } from '@reduxjs/toolkit';


const initialState={
    profileName:null,
    email:null,
    num:null,
    gender:null
}


const profileSlice = createSlice({
    name:"profileDetails",
    initialState,
    reducers:{
        profileData:(state,action)=>{
            state.profileName=action.payload;
            state.email=action.payload;
            state.num=action.payload;

        }
    }
})
export const {profileData} = profileSlice.actions;
export default profileSlice.reducer;
