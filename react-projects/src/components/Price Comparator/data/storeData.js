export const stores = [
    {
        id: 1,
        name: "Grocery Store A",
        location: {
            lat: 37.7749,  // Latitude for San Francisco
            lng: -122.4194, // Longitude for San Francisco
        },
        address: "123 Market St, San Francisco, CA 94103",
        priceList: [
            { item: "Apple", price: 1.99 },
            { item: "Banana", price: 0.59 },
            { item: "Milk (1L)", price: 2.49 },
            { item: "Eggs (dozen)", price: 3.79 },
        ],
    },
    {
        id: 2,
        name: "SuperMart B",
        location: {
            lat: 37.7849,
            lng: -122.4294,
        },
        address: "456 Ocean Ave, San Francisco, CA 94112",
        priceList: [
            { item: "Apple", price: 1.89 },
            { item: "Banana", price: 0.49 },
            { item: "Milk (1L)", price: 2.59 },
            { item: "Eggs (dozen)", price: 3.99 },
        ],
    },
    {
        id: 3,
        name: "Fresh Market C",
        location: {
            lat: 37.7950,
            lng: -122.4174,
        },
        address: "789 Mission St, San Francisco, CA 94105",
        priceList: [
            { item: "Apple", price: 2.10 },
            { item: "Banana", price: 0.79 },
            { item: "Milk (1L)", price: 2.69 },
            { item: "Eggs (dozen)", price: 3.49 },
        ],
    },
    {
        id: 4,
        name: "Organic Mart D",
        location: {
            lat: 37.7599,
            lng: -122.4148,
        },
        address: "1015 Haight St, San Francisco, CA 94117",
        priceList: [
            { item: "Apple", price: 2.50 },
            { item: "Banana", price: 0.69 },
            { item: "Milk (1L)", price: 2.39 },
            { item: "Eggs (dozen)", price: 3.29 },
        ],
    },
    {
        id: 5,
        name: "Neighborhood Market E",
        location: {
            lat: 37.7624,
            lng: -122.4355,
        },
        address: "1245 Castro St, San Francisco, CA 94114",
        priceList: [
            { item: "Apple", price: 1.79 },
            { item: "Banana", price: 0.39 },
            { item: "Milk (1L)", price: 2.19 },
            { item: "Eggs (dozen)", price: 3.59 },
        ],
    },
]

export const storePrices = [
    { storeId: 1, priceList: [{ item: "Apple", price: 1.99 }, { item: "Banana", price: 0.59 }] },
    { storeId: 2, priceList: [{ item: "Apple", price: 1.89 }, { item: "Banana", price: 0.49 }] },
    { storeId: 3, priceList: [{ item: "Apple", price: 2.10 }, { item: "Banana", price: 0.79 }] },
    { storeId: 4, priceList: [{ item: "Apple", price: 2.50 }, { item: "Banana", price: 0.69 }] },
    { storeId: 5, priceList: [{ item: "Apple", price: 1.79 }, { item: "Banana", price: 0.39 }] },
]