import Select from "react-select"
import "./SortGoods.scss"
import { useEffect, useState } from "react"
import { Select2 } from "./Select2"

const options = [
  { label: "All", value: 1 },
  { label: "Fruits", value: 2 },
  { label: "Vegetables", value: 3 },
  { label: "Berries", value: 4 },
]

export const SortGoods = () => {
  const [value1, setValue1] = useState([options[0]])
  const [value2, setValue2] = useState(options[0])
  const [myValue, setMyValue] = useState("")
  const [status, setStatus] = useState("loading")
  const [range, setRange] = useState(10)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchGoods = async () => {
      try {
        const res = await fetch("http://localhost:3000/goods")
        const data = await res.json()
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchGoods()
    console.log("render")
  }, [])

  return (
    <div className="SortGoods">
      <div className="sortItems">
        <input type="checkbox"></input>
        <select value={myValue} onChange={(e) => setMyValue(e.target.value)}>
          <option value="">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Berries">Berries</option>
        </select>
        <input type="radio" name="price" />
        <input type="radio" name="price" />
        {console.log("render from return")}
        <input
          type="range"
          min={0}
          max={10}
          onChange={(e) => setRange(e.target.value)}
        />
        <span>{range}</span>
      </div>
      <div className="sortItemsLib">
        <Select
          options={options}
          onChange={(selectedOption) => console.log(selectedOption)}
        />
      </div>
      <div className="sortItemsHuge">
        <Select2
          multiple
          options={options}
          value={value1}
          onChange={(o) => setValue1(o)}
        />
        <br />
        <Select2
          options={options}
          value={value2}
          onChange={(o) => setValue2(o)}
        />
      </div>
      <div className="goodsList">
        {data
          .filter((item) => item.price <= range)
          .map((item) => (
            <div className="itemsContainer">
              <h1 key={item.id}>{item.text}</h1>
              <p>{item.price}</p>
            </div>
          ))}
      </div>
    </div>
  )
}
