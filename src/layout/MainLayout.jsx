import { Link, Outlet } from "react-router-dom"

import "./MainLayout.scss"

export const MainLayout = () => {
  return (
    <div>
      <div className="navigation">
        <Link to="/todo">Todo's</Link>
        <Link to="/fetchtodo">Fetch Todo's</Link>
        <Link to="/RtkProducts">RTK query product's</Link>
        <Link to="/sliders">Sliders</Link>
      </div>
      <Outlet />
    </div>
  )
}
