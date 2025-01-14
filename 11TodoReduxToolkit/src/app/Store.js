import {configureStore} from '@reduxjs/toolkit'
import  todoReducer from '../features/slice/todoSlice';

const Store = configureStore({
    reducer : todoReducer
});

export default Store;