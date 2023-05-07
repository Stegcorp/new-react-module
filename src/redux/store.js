import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {commentReducer, userReducer, carReducer} from "./slices";

const rootReducer = combineReducers({
    users: userReducer,
    comments: commentReducer,
    cars: carReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}
