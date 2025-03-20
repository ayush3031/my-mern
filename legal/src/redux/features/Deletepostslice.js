import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
    posts : [],
    loading: false,
    error: null,
}

export const fetchPosts = createAsyncThunk('fetchposts',async(_,{ rejectWithValue })=>{
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/home/posts`,{
            withCredentials:true,
            credentials: "include",
        });
        console.log(response.data);
        return response.data;
    }
    catch (error)
    {
        return rejectWithValue(error.response?.data||"Error fetching posts");
    }
})

const PostSlice = createSlice({
    initialState:initialState,
    name:'posts',
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchPosts.pending,(state)=>{
                state.loading=true;
            })
            .addCase(fetchPosts.fulfilled,(state,action)=>{
                state.loading=false;
                state.posts=action.payload;
            })
            .addCase(fetchPosts.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload;
            })
    }
})


export default PostSlice.reducer;