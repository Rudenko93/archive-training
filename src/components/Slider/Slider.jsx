import { useEffect, useState } from "react"
import { SliderItem } from "../SliderItem"
import "./Slider.scss"

export const Slider = () => {
  const [slides, setSlides] = useState([])
  useEffect(() => {
    const fetchSlider = async () => {
      const res = await fetch("http://localhost:3000/slides")
      const data = await res.json()
      return setSlides(data)
    }
    fetchSlider()
  }, [])

  const [curr, setCurr] = useState(0)
  const prev = () => {
    setCurr(curr === 0 ? slides.length - 1 : curr - 1)
  }
  const next = () => {
    setCurr(curr === slides.length - 1 ? 0 : curr + 1)
  }

  return (
    <div className="container">
      <div
        className="mySlider"
        style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides.map((slide) => (
          <SliderItem slide={slide} key={slide.id} />
        ))}
      </div>
      <div className="sliderNavigation">
        <span onClick={prev}>{"<"}</span>
        <span onClick={next}>{">"}</span>
      </div>
    </div>
  )
}
