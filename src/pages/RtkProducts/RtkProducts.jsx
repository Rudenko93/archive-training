import { useState } from "react"
import { useGetProductsQuery, useAddProductMutation } from "../../store/api/"
import "./RtkProducts.scss"

export const RtkProducts = () => {
  const [limit, setLimit] = useState("")
  const [inpValue, setInpValue] = useState("")
  const { data = [], error, isLoading } = useGetProductsQuery(limit)
  const [addProduct, { isError }] = useAddProductMutation()

  const handleAddProduct = async () => {
    if (inpValue) {
      addProduct({ text: inpValue }).unwrap()
      setInpValue("")
    }
  }

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="fetchTodo">
      <select value={limit} onChange={(e) => setLimit(e.target.value)}>
        <option value="">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input value={inpValue} onChange={(e) => setInpValue(e.target.value)} />
      <button onClick={handleAddProduct}>Add product</button>
      {data.map((product) => (
        <h1 key={product.id}>{product.text}</h1>
      ))}
    </div>
  )
}
