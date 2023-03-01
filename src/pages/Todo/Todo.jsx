import { TodoForm } from "../../components/TodoForm"
import { TodoList } from "../../components/TodoList"

import "./Todo.scss"

export const Todo = () => {
  return (
    <div className="todo">
      <TodoForm fetch={false}>
        <h1>My todo's</h1>
      </TodoForm>
      <TodoList />
    </div>
  )
}
