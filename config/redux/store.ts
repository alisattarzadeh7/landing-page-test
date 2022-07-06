
import { configureStore } from '@reduxjs/toolkit'
import {store} from "next/dist/build/output/store";
import LayoutSlice from "./slices/LayoutSlice";

export default configureStore({
    reducer: {
        layout: LayoutSlice,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch