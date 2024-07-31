import React, { useEffect, useState } from 'react'
import axios from 'axios'


import ProductList from '../ProductList'



const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = () => {
            axios
                .get(`https://dummyjson.com/products`)
                .then((response) => { setProducts(response.data.products) })
        }

        fetchProducts()
    }, [])


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Product List</h1>
            <ProductList products={products} />
        </div>
    )
}

export default Home