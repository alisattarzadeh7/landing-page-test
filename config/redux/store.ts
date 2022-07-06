
import { configureStore } from '@reduxjs/toolkit'
import {store} from "next/dist/build/output/store";
import counterReducer from "./features/counter/counterSlice"

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch