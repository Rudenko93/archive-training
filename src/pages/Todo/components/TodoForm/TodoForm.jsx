import { useState } from "react"
import "./TodoForm.scss"

export const TodoForm = () => {
  const [inpVal, setInpVal] = useState("")
  const addTodo = () => {
    console.log(inpVal)
    setInpVal("")
  }

  return (
    <div className="todoForm">
      <label>
        <input
          type="text"
          value={inpVal}
          onChange={(e) => setInpVal(e.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add new Todo
        </button>
      </label>
    </div>
  )
}
