import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("http://localhost:3000/todos")
      if (!response.ok) {
        throw new Error()
      }
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const deleteFetchTodo = createAsyncThunk(
  "todo/deleteFetchTodo",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      })
      if (!response.ok) {
        throw new Error("Can't delete task. Server error.")
      }

      dispatch(todoActions.deleteTodo({ id }))
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const addFetchTodo = createAsyncThunk(
  "todo/addFetchTodo",
  async function (text, { rejectWithValue, dispatch }) {
    try {
      const todo = {
        text: text,
        id: new Date().toISOString(),
        done: false,
      }
      console.log(todo)
      const response = await fetch(`http://localhost:3000/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      })
      if (!response.ok) {
        throw new Error("Can't add task. Server error.")
      }
      dispatch(todoActions.addTodo({ todo }))
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const toggleFetchTodo = createAsyncThunk(
  "todo/toggleFetchTodo",
  async function (id, { rejectWithValue, dispatch, getState }) {
    const todo = getState().todo.todos.find((todo) => todo.id === id)
    console.log(todo)

    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ done: !todo.done }),
      })
      if (!response.ok) {
        throw new Error("Can't toggle task. Server error.")
      }
      dispatch(todoActions.toggleTodo({ id }))
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    status: "init",
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload.todo)
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
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "resolved"
        state.todos = [...state.todos, ...action.payload]
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "rejected"
      }),
})
// .addCase(loadTodosThunk.fulfilled, (state, action) => {
//   state.status = "success";
//   state.items = action.payload;
// })
// export const { actions } = todoSlice
// export const { todoReducer } = todoSlice.reducer
export const { reducer: todoReducer, actions: todoActions } = todoSlice
