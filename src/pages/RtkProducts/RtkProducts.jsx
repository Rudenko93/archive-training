import { useState } from "react"
import {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} from "../../store/api/"
import "./RtkProducts.scss"

export const RtkProducts = () => {
  const [limit, setLimit] = useState("")
  const [inpValue, setInpValue] = useState("")
  const { data = [], error, isLoading } = useGetProductsQuery(limit)
  const [addProduct, { isError }] = useAddProductMutation()
  const [deleteProduct] = useDeleteProductMutation()

  const handleAddProduct = () => {
    if (inpValue) {
      addProduct({ text: inpValue }).unwrap()
      setInpValue("")
    }
  }

  const handleDeleteProduct = (id) => {
    deleteProduct(id).unwrap()
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
        <h1
          key={product.id}
          onDoubleClick={() => handleDeleteProduct(product.id)}>
          {product.text}
        </h1>
      ))}
    </div>
  )
}
