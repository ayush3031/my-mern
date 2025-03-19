import {configureStore} from '@reduxjs/toolkit';
import postsreducers from './features/Postslice';
import postuserreducers from './features/Userofpostslice';
import userreducers from './features/Userslice';

export const Store = configureStore({
    reducer:{
        posts:postsreducers,
        postuser:postuserreducers,
        user:userreducers,
    },
})