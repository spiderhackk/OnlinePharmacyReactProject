import { createSlice } from '@reduxjs/toolkit';

const initialState={
    
        items:[   
        ],
        totalPrice:0,
        totalQuantity:0
    
}
const cartSlice = createSlice({
    name:"cartItem",
    initialState,
    reducers:{
        addItem:(state:any,action:any)=>{
            const productIndex = state.items.findIndex((item:any)=>item.id===action.payload.id);
            if(productIndex>=0){
                const count = state.items[productIndex].cartQuantity+=1
                
                
                
            }else{
                const addingCountQuantity = {...action.payload,cartQuantity:1}
                state.items.push(addingCountQuantity);   
                
            }
            state.totalQuantity+=1
                  
            
        },
        addItemCounter:((state:any,action:any)=>{
            const productIndex = state.items.findIndex((item:any)=>item.id===action.payload.id);
            if(productIndex>=0){
                state.items[productIndex].cartQuantity+=1
                
            }
        })
    }
    
})
export const {addItem} = cartSlice.actions;
export default cartSlice.reducer;