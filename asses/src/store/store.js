import { configureStore } from "@reduxjs/toolkit";

import likeReducer from './like'
const store = configureStore({reducer:{likeReducer}})

export default store;