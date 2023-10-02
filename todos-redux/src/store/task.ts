import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";



export type Task ={
    isChecked: boolean
    todo: string;

};


const task = createSlice({
    name: 'task',
    reducers: {
        addTask: (state, action)=>{
            state.tasks.push(action.payload as Task) //This works because of immer 

        },
        checkTask:(state, action)=>{
            const index = action.payload as number;
            if(index >= state.tasks.length || index < 0){
                throw new Error("Error this index is wrong")
            }
            state.tasks[index].isChecked = false;

        },
        removeTask:(state, action)=>{
            const index = action.payload as number;
            if(index >= state.tasks.length || index < 0){
                throw new Error("Error this index is wrong")
            }
            state.tasks.splice(index, 1);

        },
        editTask:(state, action)=>{
            const index = action.payload.index as number;
            if(index >= state.tasks.length || index < 0){
                throw new Error("Error this index is wrong")
            }
            state.tasks[index] = action.payload.newTask;
        }
    
    },
    initialState:{
        tasks:  [] as Task[]
    }
})

const  {addTask, checkTask, removeTask, editTask} = task.actions

export {addTask, checkTask, removeTask, editTask}

export default task.reducer