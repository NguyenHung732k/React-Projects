import React from 'react'
import ProductList from '../components/ProductList'

import notFoundImg from '../../../assets/img-not-available.jpg'

const HomePage = () => {

    // Sample data for featured products
    const featuredProducts = [
        { id: 1, name: 'Product 1', price: 29.99, image: notFoundImg },
        { id: 2, name: 'Product 2', price: 49.99, image: notFoundImg },
        { id: 3, name: 'Product 3', price: 19.99, image: notFoundImg },
    ]

    return (
        <div>
            <section className="bg-blue-600 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Our Marketplace!</h1>
                    <p className="text-xl text-white mb-6">Find the best deals on a variety of products.</p>
                    <a href="#featured" className="bg-white text-blue-600 text-decoration-none py-2 px-4 rounded-lg font-semibold">Shop Now</a>
                </div>
            </section>

            <section id="featured" className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
                    <ProductList products={featuredProducts} />
                </div>
            </section>
        </div>
    )
}

export default HomePage