import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { MainLayout } from "./layout"
import { Todo } from "./pages"
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "todo", element: <Todo /> }],
  },
])

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  )
}

export default App
