import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import "./TodoList.scss"

export const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos)

  return (
    <div className="todoList">
      <div className="container">
        {todos.map((todo) => (
          <h1>{todo.text}</h1>
        ))}
      </div>
    </div>
  )
}
