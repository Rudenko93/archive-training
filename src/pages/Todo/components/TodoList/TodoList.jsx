import { useDispatch, useSelector } from "react-redux"
import { TodoItem } from "./TodoItem"
import "./TodoList.scss"

export const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos)

  return (
    <div className="todoList">
      <div className="container">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} id={todo.id} />
        ))}
      </div>
    </div>
  )
}
