import { Link, Outlet } from "react-router-dom"
import "./MaimLayout.scss"

export const MainLayout = () => {
  return (
    <div>
      <div className="navigation">
        <Link to="/Todo">Todo</Link>
      </div>
      <Outlet />
    </div>
  )
}
