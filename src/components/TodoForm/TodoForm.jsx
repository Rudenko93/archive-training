import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFetchTodo } from "../../store/slices/todoSlice"
import "./TodoForm.scss"

export const TodoForm = ({ children }) => {
  const [text, setText] = useState("")

  const dispatch = useDispatch()
  const chT = useSelector((state) => state.todo.todos)

  const addTodo = () => {
    dispatch(addFetchTodo(text))
    setText("")
  }

  const checkTodo = () => {
    console.log(chT)
  }

  return (
    <div className="todoForm">
      {children}
      <label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add new Todo
        </button>
        <button type="submit" onClick={checkTodo}>
          Check
        </button>
      </label>
    </div>
  )
}
