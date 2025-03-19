import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
    postuser : [],
    loading: false,
    error: null,
}

export const fetchPostUser = createAsyncThunk('fetchuserofpost',async(postId,{ rejectWithValue })=>{
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


const UserOfPostSlice = createSlice({
    initialState:initialState,
    name:'postuser',
    reducers:{ },
    extraReducers:(builder)=>{
        builder
            //fetch user
            .addCase(fetchPostUser.pending,(state)=>{
                state.loading=true;
            })
            .addCase(fetchPostUser.fulfilled,(state,action)=>{
                state.loading=false;
                state.postuser=action.payload;
            })
            .addCase(fetchPostUser.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload;
            })
    }
})


export default UserOfPostSlice.reducer;