import {combineReducers, createStore} from "redux";
import {catReducer} from "../reducer";
import {dogReducer} from "../reducer";

export let store = createStore(combineReducers({catReducer, dogReducer}))
