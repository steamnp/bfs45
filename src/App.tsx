import { useState, useEffect } from 'react'
import { IData, IProduct } from './type'

function App() {
  // products -> state variable
  // How to type useState hook?
  const [products, setProducts] = useState<IProduct[]>()
  const [error, setError] = useState('')

  useEffect(() => {
    // async await
    const getAllProducts = async () => {
      try {
        const res = await fetch('https://bfs45.gorakhjoshi.com/api/v1/product/all')
        const data: IData = await res.json()

        if (data.success) {
          setProducts(data.products)
        }

        if (data.message) {
          setError(data.message)
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        } else {
          // Handle non-Error type errors here
          setError('An unexpected error occurred')
        }
      }
    }

    getAllProducts()
  }, [])

  return (
    <>
      {products &&
        products.map((product) => {
          return (
            <div key={product._id}>
              <img src={product.photo.url} />
              <div>{product.name}</div>
            </div>
          )
        })}

      {error && <div>{error}</div>}
    </>
  )
}

export default App
