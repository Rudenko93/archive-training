import { configureStore } from "@reduxjs/toolkit"
import { todoReducer } from "./slices/todoSlice"
import { productsApi } from "./api"

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})
