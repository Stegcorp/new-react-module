import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {commentReducer, userReducer} from "./slices";

const rootReducer = combineReducers({
    users: userReducer,
    comments:commentReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}
