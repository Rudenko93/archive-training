import { useDispatch } from "react-redux"
import { todoActions } from "../../store/slices/todoSlice"
import "./TodoItem.scss"

export const TodoItem = ({ todo, id }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    console.log(todo.id)
    dispatch(todoActions.deleteTodo({ id }))
  }

  const handleChange = () => {
    dispatch(todoActions.toggleTodo({ id }))
  }

  return (
    <div className="todoItem">
      <label>
        <button onClick={handleClick}>Delete todo</button>
      </label>
      <label>
        <input type={"checkbox"} onChange={handleChange} />
      </label>
      <div className="todoText">
        <h1 className={todo.done && "done"}>{todo.text}</h1>
      </div>
    </div>
  )
}
