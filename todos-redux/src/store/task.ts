import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";



export type Task ={
    isChecked: boolean
    todo: string;
    i: number;

};


const task = createSlice({
    name: 'task',
    reducers: {
        addTask: (state, action)=>{
            const obj = action.payload
            obj.i = state.tasks.length ?? 0
            state.tasks.push(obj as Task) //This works because of immer 

        },
        checkTask:(state, action)=>{
            const index = action.payload as number;
            if(index >= state.tasks.length || index < 0){
                throw new Error("Error this index is wrong")
            }
            state.tasks[index].isChecked = true;

        },
        unCheckTask:(state, action)=>{
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
            let i = 0;
           for(const task of state.tasks){
               task.i = i;
               i ++
           }

        },
        editTask:(state, action)=>{
            const index = action.payload.index as number;
            if(index >= state.tasks.length || index < 0){
                throw new Error("Error this index is wrong " + index)
            }
            state.tasks[index].todo  = action.payload.newTask;
        }
    
    },
    initialState:{
        tasks:  [] as Task[]
    }
})

const  {addTask, checkTask, removeTask, editTask, unCheckTask} = task.actions

export {addTask, checkTask, removeTask, editTask,unCheckTask }

export default task.reducer