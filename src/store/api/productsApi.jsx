import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (limit = "") => `products/?${limit && `_limit=${limit}`}`,
    }),
    addProduct: builder.mutation({
      query: (body) => ({
        url: "products",
        method: "POST",
        body,
      }),
    }),
  }),
})

export const { useGetProductsQuery, useAddProductMutation } = productsApi
