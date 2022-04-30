//import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// In addition, we can use each of these slice in a separate js file and then use it in our index.js (store) as a reducer

const Initial_States = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: Initial_States,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        }
    }
});

const auth_IntialStates={
    isAuthenticated : false
};

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: auth_IntialStates,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})

const store = configureStore({
    reducer: {counter: counterSlice.reducer , authentication : authenticationSlice.reducer}
});




export const counterActions = counterSlice.actions;
export const authenticationActions = authenticationSlice.actions;
export default store;


// const counterReducer = (state = Initial_States, action) => {
    // if (action.type === 'increment') {
    //     return {
    //         counter: state.counter + 1,
    //         showCounter: state.showCounter
    //     }
    // }
    // if (action.type === 'increase') {
    //     return {
    //         counter: state.counter + action.amount,
    //         showCounter: state.showCounter
    //     }
    // }
    // if (action.type === 'decrement') {
    //     return {
    //         counter: state.counter - 1,
    //         showCounter: state.showCounter
    //     }
    // }
    // if (action.type === 'toggle') {
    //     return {
    //         counter: state.counter,
    //         showCounter: !state.showCounter
    //     }
    // }
    // return state;
// }

//const store = createStore(counterSlice.reducer);
