import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
    user : [],
    loading: false,
    error: null,
}

export const fetchUser = createAsyncThunk('fetchusers',async(postId,{ rejectWithValue })=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/home/posts/getuser/${postId}`,{
            withCredentials:true,
        });
        return response.data;
    }
    catch(err)
    {
        console.log('couldnt get user');
        return rejectWithValue(err.response?.data||"error getting user");
    }
})


const UserSlice = createSlice({
    initialState:initialState,
    name:'user',
    reducers:{ },
    extraReducers:(builder)=>{
        builder
            //fetch user
            .addCase(fetchUser.pending,(state)=>{
                state.loading=true;
            })
            .addCase(fetchUser.fulfilled,(state,action)=>{
                state.loading=false;
                state.user=action.payload;
            })
            .addCase(fetchUser.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload;
            })
    }
})


export default UserSlice.reducer;