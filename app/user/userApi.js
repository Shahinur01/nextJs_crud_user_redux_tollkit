import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




// get all user
export const fetchUser = createAsyncThunk("user/fetchUser", async() => {
    const response = await axios.get("http://localhost:3000/api/user");
    console.log(response);
    return response.data.users
})

//  create user
export const createUser = createAsyncThunk("user/createUser", async(data) =>{
    const response = await axios.post("http://localhost:3000/api/user",data);
    return response.data.user
})
//  delete user
export const deleteUser = createAsyncThunk("user/deleteUser", async(id) =>{
    const response = await axios.delete(`http://localhost:3000/api/user?id=${id}`);

    return id;
})
