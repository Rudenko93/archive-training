import Select from "react-select"
import "./SortGoods.scss"

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
]

export const SortGoods = () => {
  return (
    <div className="SortGoods">
      <div className="sortItems">
        <input type="checkbox"></input>
        <select value={options[0].value}>
          <option></option>
          <option>ваыв</option>
          <option>ва</option>
          <option>ыва</option>
        </select>
      </div>
      <div className="sortItemsLib">
        <Select options={options} />
      </div>
      <div className="goodsList"></div>
    </div>
  )
}
