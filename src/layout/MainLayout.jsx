import { Link, Outlet } from "react-router-dom"

import "./MainLayout.scss"

export const MainLayout = () => {
  return (
    <div>
      <div className="navigation">
        <Link to="/todo">Todo</Link>
      </div>
      <Outlet />
    </div>
  )
}
