import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async function () {
    const response = await fetch("http://localhost:3000/todos")
    const data = await response.json()
    console.log(data)
    return data
  }
)

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      { text: "hi", id: new Date().toISOString() + 1, done: false },
      { text: "by", id: new Date().toISOString(), done: false },
    ],
    status: "init",
    error: null,
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
  extraReducers: (builder) =>
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "resolved"
        state.todos = [...state.todos, ...action.payload]
      })
      .addCase(fetchTodos.rejected, (state) => {}),
})
// .addCase(loadTodosThunk.fulfilled, (state, action) => {
//   state.status = "success";
//   state.items = action.payload;
// })
// export const { actions } = todoSlice
// export const { todoReducer } = todoSlice.reducer
export const { reducer: todoReducer, actions: todoActions } = todoSlice
