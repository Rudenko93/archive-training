import { Slider } from "../../components/Slider"
import { SliderLib } from "../../components/SliderLib"
import "./Sliders.scss"

export const Sliders = () => {
  return (
    <div className="sliders">
      <h1>Slider without library</h1>
      <Slider />
      <h1>Slider with library</h1>
      <SliderLib />
      <h1>Infinite slider without library</h1>
      <h1>Infinite slider with library</h1>
    </div>
  )
}
