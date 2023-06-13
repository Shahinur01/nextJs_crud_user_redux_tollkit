import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, fetchUser } from "./userApi";

const initialState ={
    users: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchUser.fulfilled, (state,action) => {
            state.users = action.payload
        }).addCase(createUser.fulfilled, (state,action) =>{
            state.users.push(action.payload)
        }).addCase(deleteUser.fulfilled, (state,action) =>{
            state.users = state.users.filter(user => user._id !== action.payload) 
        })
    }
})

// select
export const selectUser = state => state.user

// action
export const {} = userSlice.actions;
// reducer
export default userSlice.reducer