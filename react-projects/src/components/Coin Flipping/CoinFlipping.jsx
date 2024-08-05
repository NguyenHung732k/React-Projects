import React, { useState } from 'react';

import './CoinFlippingStyles.css'

const CoinFlipping = () => {


    const [result, setResult] = useState(null)
    const [flipping, setFlipping] = useState(false)

    const flipCoin = () => {
        setFlipping(true)
        setTimeout(() => {
            const isHeads = Math.random() < 0.5
            setResult(isHeads ? 'heads' : 'tails')
            setFlipping(false)
        }, 1000)
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-3xl font-bold mb-4">Coin Flip</div>

            <div id="coin" className={`${result} relative rounded-full bg-gray-200 w-32 h-32 flex items-center justify-center`}>
                <div class="side-a">
                    <img
                        src={'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg'}
                        alt={result}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className="side-b">
                    <img
                        src={'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'}
                        alt={result}
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </div>
            <button
                onClick={flipCoin}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Flip Coin
            </button>
        </div>
    );
};

export default CoinFlipping;