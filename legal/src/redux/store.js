import {configureStore} from '@reduxjs/toolkit';
import postsreducers from './features/Postslice';
import userreducers from './features/Userslice';
import likestatusreducers from './features/LikeStatus';
import addlikereducers from './features/AddLike';

export const Store = configureStore({
    reducer:{
        posts:postsreducers,
        user:userreducers,
    },
})