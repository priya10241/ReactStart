import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos:[
        {
            id: 234,
            tittle:"hello world",
            isComplete:false
        }
    ]
}

const todoSlice = createSlice({
    name: 'todo',

})