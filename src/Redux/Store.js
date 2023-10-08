import { combineReducers } from "redux";
import { reducer } from "./Reducer";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer=combineReducers({user:reducer})
const Store = configureStore({reducer:rootReducer,middleware:[thunk,logger]})

export default Store;