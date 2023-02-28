import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { todoActions } from "../../../../store/slices/todoSlice"
import "./TodoForm.scss"

export const TodoForm = () => {
  const [text, setText] = useState("")

  const dispatch = useDispatch()
  const chT = useSelector((state) => state.todo.todos)

  const addTodo = () => {
    dispatch(todoActions.addTodo({ text }))
    setText("")
  }

  const checkTodo = () => {
    console.log(chT)
  }

  return (
    <div className="todoForm">
      <h1>My Todo's</h1>
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
