import {createSlice} from "@reduxjs/toolkit"

export const Slicer=createSlice({
    name:"task",
    initialState:{value:0},
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        Decrement:(state)=>{
            state.value-=1
        }
    }
})

export const {increment}=Slicer.actions;
export const {Decrement}=Slicer.actions;
export default Slicer.reducer;