import { configureStore } from '@reduxjs/toolkit';
import instrumentReducer from '../features/instrumentSlice';

export const store = configureStore({
    reducer: instrumentReducer
})
