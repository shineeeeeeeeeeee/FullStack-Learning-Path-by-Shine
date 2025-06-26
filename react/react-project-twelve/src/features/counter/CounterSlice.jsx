import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't actually mutate the state because it uses the Inner lib,
            // that detects changes to a "draft state" and produces a brand new immutable state based off those changes.
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        // reducer function takes old state and action and makes a new state out of it
        incrementByAmount: ( state, action ) => {
            state.value += Number(action.payload)
        },
        reset: state => {
            state.value = 0
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = CounterSlice.actions

export default CounterSlice.reducer
