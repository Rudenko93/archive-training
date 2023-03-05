import { Slider } from "../../components/Slider"
import { SliderItem } from "../../components/SliderItem"
import { SliderLib } from "../../components/SliderLib"
import { Carousel } from "../../components/SliderInf"
import "./Sliders.scss"

const slides = [
  {
    id: 1,
    title: "AI Artists",
    desc: "Add talent to AI",
    img: "https://images.pexels.com/photos/7532110/pexels-photo-7532110.jpeg?auto=compress&cs=tinysrgb&w=800&&lazy=load",
  },
  {
    id: 2,
    title: "Logo Design",
    desc: "Build yor brand",
    img: "https://images.pexels.com/photos/11295165/pexels-photo-11295165.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 3,
    title: "WordPress",
    desc: "Customize your site",
    img: "https://images.pexels.com/photos/4371669/pexels-photo-4371669.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
]

export const Sliders = () => {
  return (
    <div className="sliders">
      <h1>Slider without library</h1>
      <Slider />
      <h1>Infinite slider without library</h1>
      <div className="app__main-container">
        <Carousel infinite>
          {slides.map((slide) => (
            <Carousel.Page>
              <SliderItem slide={slide} key={slide.id} />
            </Carousel.Page>
          ))}
        </Carousel>
      </div>
      <h1>Infinite slider with library</h1>
      <SliderLib />
    </div>
  )
}
