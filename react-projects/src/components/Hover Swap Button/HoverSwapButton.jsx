import React from 'react';

const HoverSwapButton = ({ primaryLabel = "Buy", hoverLabel = "Checkout" }) => {
    return (
        <button
            aria-label="Proceed to checkout"
            className="relative h-14 w-52 bg-blue-600 text-white rounded-lg overflow-hidden group shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
        >
            <div className="flex items-center justify-center h-full px-4">
                <svg className="w-5 h-5 mr-2 opacity-80 group-hover:opacity-0 transition-opacity duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" />
                </svg>

                <span className="relative h-[28px] overflow-hidden">
                    <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                        <span className="block h-[28px]">{primaryLabel}</span>
                        <span className="block h-[28px]">{hoverLabel}</span>
                    </span>
                </span>

                <svg className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z" />
                </svg>
            </div>
        </button>
    )
}

export default HoverSwapButton