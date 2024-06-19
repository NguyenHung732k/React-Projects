import React, { useEffect, useState } from 'react'
import './LoadMoreStyles.css'

import UseFetchHook from '../Use Fetch/UseFetchHook'

const LoadMore = () => {

  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [disableButton, setDisableButton] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20
          }`
        )
        const result = await response.json()

        if (result && result.products && result.products.length) {
          setProducts((prevProducts) => [...prevProducts, ...result.products])
        }

      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [count])


  useEffect(() => {
    if (products && products.length === 100) {
      setDisableButton(true)
    }
  }, [products])

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
            <div className="product" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))
          : null}
      </div>
      <div>
        <button className="load-button" disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p style={{ color: "white", textAlign: "center" }}>You have reached to 100 products</p> : null}
      </div>
    </div>
  )
}

export default LoadMore