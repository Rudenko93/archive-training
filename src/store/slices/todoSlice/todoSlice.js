import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [{ text: "hi" }, { text: "by" }],
    status: "init",
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        text: action.payload,
        id: "",
        time: new Date().toISOString(),
        done: false,
      })
    },
  },
})

// export const { actions } = todoSlice
// export const { todoReducer } = todoSlice.reducer
export const { reducer: todoReducer, actions: todoActions } = todoSlice
