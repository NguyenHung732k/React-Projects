import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext)

    return (
        <div className="mt-8">
            <h2 className="text-[2vw] font-semibold">Top dishes near you</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] mt-8 gap-8 gap-y-12">
                {food_list && food_list.length > 0 && food_list.map((item, index) => (

                    (category === "All" || category === item.category) &&

                    <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />

                ))}
            </div>
        </div>
    )
}

export default FoodDisplay