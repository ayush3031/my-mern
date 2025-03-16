import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { useNavigate } from 'react-router';
import axios from 'axios';


const initialState = {
    posts : [],
    loading: false,
    error: null,
}

export const fetchPosts = createAsyncThunk('fetchposts',async(_,{ rejectWithValue })=>{
    try {
        console.log('p');
        const response = await axios.get('http://localhost:5000/home/posts',{
            withCredentials:true,
            credentials: "include",
        });
        console.log(response.data);
        return response.data;
    }
    catch (error)
    {
        console.log('error in fetching');
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