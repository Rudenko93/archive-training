import { useEffect, useState } from "react"
import { SliderItem } from "../../components/SliderItem"

import "./Sliders.scss"

export const Sliders = () => {
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
    <div className="sliders">
      <h1>Slider without library</h1>
      <div className="container">
        <div
          className="slider"
          style={{ transform: `translateX(-${curr * 100}%)` }}>
          {slides.map((slide) => (
            <SliderItem slide={slide} key={slide.id} />
          ))}
        </div>
        <h1>
          <span onClick={prev}>prev</span>
          <span onClick={next}>next</span>
        </h1>
      </div>
      <h1>Slider with library</h1>
      <h1>Infinity slider without library</h1>
      <h1>Infinity slider with library</h1>
    </div>
  )
}
