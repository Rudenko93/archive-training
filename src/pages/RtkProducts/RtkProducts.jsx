import { useState } from "react"
import {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} from "../../store/api/"
import "./RtkProducts.scss"
import Input from "@mui/joy/Input"

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

  if (error || isError) return <h1>Error</h1>

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="containerFetch">
      <h1 className="title">Fetch products with RTK query</h1>
      <div className="fetchProducts">
        <select value={limit} onChange={(e) => setLimit(e.target.value)}>
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        {console.log("render")}

        <Input />
        <input value={inpValue} onChange={(e) => setInpValue(e.target.value)} />
        <button onClick={handleAddProduct}>Add product</button>
        <div className="products">
          {data.map((product) => (
            <h1
              className="productTitle"
              key={product.id}
              onDoubleClick={() => handleDeleteProduct(product.id)}>
              {product.text}
            </h1>
          ))}
        </div>
      </div>
    </div>
  )
}
