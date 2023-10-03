import { configureStore } from "@reduxjs/toolkit";
import task from "./task";


const store = configureStore({reducer: {
    task: task
}})

export default store