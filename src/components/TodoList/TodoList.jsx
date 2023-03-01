import { useDispatch, useSelector } from "react-redux"
import { TodoItem } from "../TodoItem"
import { fetchTodos } from "../../store/slices/todoSlice"
import "./TodoList.scss"

export const TodoList = ({ fetch }) => {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  const fetchTodo = () => {
    dispatch(fetchTodos())
  }

  return (
    <div className="todoList">
      {fetch && <button onClick={fetchTodo}>Fetch ToDo</button>}
      <div className="container">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} id={todo.id} />
        ))}
      </div>
    </div>
  )
}
