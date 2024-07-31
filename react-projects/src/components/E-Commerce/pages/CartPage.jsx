import React from 'react'
import Cart from '../Cart'

import cartItems from '../cartItems'

function CartPage() {

    return (
        <div className="container mx-auto p-4">
            <Cart cartItems={cartItems} />
        </div>
    )
}

export default CartPage