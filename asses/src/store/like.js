import { createSlice } from "@reduxjs/toolkit";


const likeSlice = createSlice({
    name: 'like',
    reducers: {
        like: (state, action)=>{
            state[action.payload] += 1
        },
        unlike:(state, action)=>{
            if(state[action.payload] == 0) return;
            state[action.payload] -= 1
        },
    },
    initialState: [0, 0, 0, 0, 0, 0, 0] //the array holds how many likes each post has
})

export const {like, unlike} = likeSlice.actions

export default likeSlice.reducer