import "./SliderItem.scss"

export const SliderItem = ({ slide }) => {
  return (
    <div className="sliderItem">
      <img src={slide.img} alt="img" />
      <h2>{slide.title}</h2>
      <h3>{slide.desc}</h3>
    </div>
  )
}
