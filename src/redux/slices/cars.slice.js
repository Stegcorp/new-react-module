import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    cars: [],
    trigger: null,
    setCarForUpdate: null
};
const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        getAllCars: (state, action) => {
            state.cars = action.payload
        },
        changeTrigger: state => {
            state.trigger = !state.trigger
        },
        setCarUpdate: (state, action) => {
            state.setCarForUpdate = action.payload
        }
    }
});

const {reducer: carReducer, actions} = slice;

const cardActions = {
    ...actions
}
export {
    carReducer,
    cardActions
}
