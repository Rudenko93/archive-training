import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [
      { text: "hi", id: new Date().toISOString() + 1, done: false },
      { text: "by", id: new Date().toISOString(), done: false },
    ],
    status: "init",
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        text: action.payload.text,
        id: new Date().toISOString(),
        done: false,
      })
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    toggleTodo(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      )
      toggledTodo.done = !toggledTodo.done
    },
  },
})

// export const { actions } = todoSlice
// export const { todoReducer } = todoSlice.reducer
export const { reducer: todoReducer, actions: todoActions } = todoSlice
