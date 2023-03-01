import { TodoForm } from "../../components/TodoForm"
import { TodoList } from "../../components/TodoList"

import "./FetchTodo.scss"

export const FetchTodo = () => {
  return (
    <div className="fetchTodo">
      <TodoForm>
        <h1>Download todo's from the server</h1>
      </TodoForm>
      <TodoList fetch={true} />
    </div>
  )
}
