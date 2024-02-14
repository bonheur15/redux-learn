import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 9
    },
    reducers: {
        increment: state => {
            state.value = state.value + 1;
        }
    }
});

export const { increment } = counterSlice.actions;
export const store = configureStore({
    reducer: counterSlice.reducer
});
