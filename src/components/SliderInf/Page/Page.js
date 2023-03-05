import { useContext } from "react"
import { CarouselContext } from "../../SliderInf/carousel-context"
import "./Page.css"

export const Page = ({ children }) => {
  const { width } = useContext(CarouselContext)
  return (
    <div
      className="page__main-container"
      style={{
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
      }}>
      {children}
    </div>
  )
}
