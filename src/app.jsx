import { useState, useEffect } from 'react'

// Synchronous Code
// Asynchronous Code -> This code will always run at the end of synchronous code

// Promise
// -Pending
// -resolved (success)
// -rejected (failure -> reason (error))

function App() {
  // products -> state variable
  const [products, setProducts] = useState()
  const [error, setError] = useState('')

  useEffect(() => {
    // To handle promise we either use then method or async await
    // async/await -> ES8

    // then method
    // fetch('https://bfs45.gorakhjoshi.com/api/v1/product/all')
    // .then((res) => res.json())
    // .then((data) => {
    //   if (data.success) {
    //     setProducts(data.products)
    //   } else {
    //     setError(data.message)
    //   }
    // })
    // .catch((error) => {
    //   setError(error.message)
    // })

    // async await
    const getAllProducts = async () => {
      try {
        const res = await fetch('https://bfs45.gorakhjoshi.com/api/v1/product/all')
        const data = await res.json()

        if (data.success) {
          setProducts(data.products)
        } else {
          setError(data.message)
        }
      } catch (error) {
        setError(error.message)
      }
    }

    getAllProducts()
  }, [])

  // console.log(
  //   products &&
  //     products.map(() => {
  //       return <div>Hello</div>
  //     })
  // )

  // string, number, object, function, undefined

  return (
    <>
      {products &&
        products.map((product) => {
          return (
            <div key={product.hgjhjghjh}>
              <img src={product.photo.url} />
              <div>{product.name}</div>
            </div>
          )
        })}

      {error && <div>{error}</div>}
    </>
  )
}

// products[0].name -> undefined[0]

// falsy values
// null, undefined, '', false, 0, NaN

// || -> will be short circuited at truthy value
// '' || null || 0 -> 0

// undefined || <div>{false}</div> || null -> <div>{false}</div>

// && -> will be short circuited at falsy value
// '' && null && 0 -> ''

// <h1>Hello</h1> && <div>{false}</div> && 'undefined' && null -> null

//  1 && 2 -> 2

// SHORT CIRCUITING OPERATOR (&&, ||)
// && logical AND operator
// 0 && 0 -> 0
// 0 && 1 -> 0
// 1 && 0 -> 0
// 1 && 1 -> 1

// || logical OR operator
// 0 || 0 -> 0
// 0 || 1 -> 1
// 1 || 0 -> 1
// 1 || 1 -> 1

export default App
