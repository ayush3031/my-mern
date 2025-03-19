import {configureStore} from '@reduxjs/toolkit';
import postsreducers from './features/Postslice';
import userreducers from './features/Userslice';

export const Store = configureStore({
    reducer:{
        posts:postsreducers,
        user:userreducers,
    },
})