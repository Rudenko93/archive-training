import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { MainLayout } from "./layout/MainLayout"
import "./App.scss"

const router = createBrowserRouter([
  { path: "/", element: <MainLayout />, children: [] },
])

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  )
}

export default App
