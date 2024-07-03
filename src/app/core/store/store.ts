import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {}
})

// Infer the type of the store
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
