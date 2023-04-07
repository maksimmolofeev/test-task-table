import { configureStore } from '@reduxjs/toolkit'
import collectionsSlice from './collectionsSlice'

export const store = configureStore({
    reducer: {
        collections: collectionsSlice.reducer
    },
})