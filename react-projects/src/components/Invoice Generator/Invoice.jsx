import React, { useState } from 'react'

import InvoiceExport from './InvoiceExport'

const Invoice = () => {

    const [item, setItem] = useState({
        name: "",
        quantity: parseFloat("", 10),
        price: parseFloat("", 10),
    })

    const [info, setInfo] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
    })

    const [itemList, setItemList] = useState([])

    const [modal, setModal] = useState(false)

    const handleAddItem = () => {
        const newItem = item
        setItemList([...itemList, newItem])
        setItem({
            name: "",
            quantity: parseFloat("", 10),
            price: parseFloat("", 10),
        })
    }

    const handleDelete = (index) => {
        const updatedItems = [...itemList]
        updatedItems.splice(index, 1)
        setItemList(updatedItems)
    }

    const calculatePrice = (item) => {
        return item.reduce((accumulator, object) => {
            return accumulator + object.price
        }, 0)
    }

    const handleSubmit = () => {
        setModal(true)
    }

    return (
        <div className="w-screen h-screen flex justify-center items-start gap-8 p-8">
            <div className="w-2/6 bg-white flex flex-col justify-center items-center gap-4">
                <h2 className="mb-2 text-3xl font-bold text-gray-900">Billing Information</h2>

                <form className="w-full flex flex-col items-center gap-4 py-8 px-4 mx-auto max-w-2xl border border-gray-200 rounded-lg shadow">
                    <div className="w-full flex flex-col justify-center items-start" >
                        <label
                            htmlFor="item"
                            className="mb-2 ml-2 text-sm font-medium text-gray-900">
                            Item Name
                        </label>
                        <input
                            value={item.name}
                            onChange={(event) => setItem({ ...item, name: event.target.value })}
                            type="text"
                            name="item"
                            id="item"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Item name"
                        />
                    </div>

                    <div className="w-full flex justify-between gap-4">
                        <div className="w-full">
                            <label
                                htmlFor="quantity"
                                className="mb-2 ml-2 text-sm font-medium text-gray-900">
                                Quantity
                            </label>
                            <input
                                value={item.quantity}
                                onChange={(event) => setItem({ ...item, quantity: +event.target.value })}
                                type="number"
                                min="0"
                                name="quantity"
                                id="quantity"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                                placeholder="Quantity"
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="price"
                                className="mb-2 ml-2 text-sm font-medium text-gray-900">
                                Price
                            </label>
                            <input
                                value={item.price}
                                onChange={(event) => setItem({ ...item, price: +event.target.value })}
                                type="number"
                                min="0"
                                name="price"
                                id="price"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                                placeholder="Price"
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleAddItem}
                        type="button"
                        className="w-20 inline-flex justify-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-4">
                        Add
                    </button>

                </form>


                <form className="w-full flex flex-col gap-4 py-8 px-4 mx-auto max-w-2xl border border-gray-200 rounded-lg shadow" action="#">
                    <div className="w-full flex flex-col justify-center items-start">
                        <label
                            htmlFor="name"
                            className="mb-2 ml-2 text-sm font-medium text-gray-900">
                            Bill To
                        </label>
                        <input
                            value={info.name}
                            onChange={(event) => setInfo({ ...info, name: event.target.value })}
                            type="text"
                            name="name"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Name"
                        />
                    </div>

                    <div className="w-full flex flex-col justify-center items-start">
                        <label
                            htmlFor="address"
                            className="mb-2 ml-2 text-sm font-medium text-gray-900">
                            Address
                        </label>
                        <input
                            value={info.address}
                            onChange={(event) => setInfo({ ...info, address: event.target.value })}
                            type="text"
                            name="address"
                            id="address"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Address"
                        />
                    </div>

                    <div className="w-full flex flex-col justify-center items-start">
                        <label
                            htmlFor="phone"
                            className="mb-2 ml-2 text-sm font-medium text-gray-900">
                            Phone
                        </label>
                        <input
                            value={info.phone}
                            onChange={(event) => setInfo({ ...info, phone: event.target.value })}
                            type="number"
                            name="phone"
                            id="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Phone number"
                        />
                    </div>

                    <div className="w-full flex flex-col justify-center items-start">
                        <label
                            htmlFor="email"
                            className="mb-2 ml-2 text-sm font-medium text-gray-900">
                            Email
                        </label>
                        <input
                            value={info.email}
                            onChange={(event) => setInfo({ ...info, email: event.target.value })}
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Email"
                        />
                    </div>
                </form>

                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
                    Confirm
                </button>
            </div>

            <div className="w-2/6">
                <div className="w-full bg-white flex flex-col justify-center items-center gap-4">
                    <h2 className="mb-2 text-3xl font-bold text-gray-900">Item List</h2>

                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-base text-gray-700 bg-gray-100">
                            <tr>
                                <th scope="col" className="px-6 py-3 rounded-s-lg">
                                    Item Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3 rounded-e-lg">
                                    Price
                                </th>
                                <th scope="col" className="px-1 py-3 rounded-e-lg">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemList && itemList.length > 0 && itemList.map((item, index) => (
                                <tr key={index} className="bg-white border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.quantity}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.price}
                                    </td>

                                    <td className="px-1 py-4">
                                        <button
                                            onClick={() => handleDelete(index)}
                                            type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 448 512"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" /></svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="font-semibold text-gray-900">
                                <th scope="row" className="px-6 py-3 text-base">Total</th>
                                <td className="px-6 py-3">{itemList.quantity}</td>
                                <td className="px-6 py-3">{calculatePrice(itemList)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            {modal &&
                <InvoiceExport info={info}
                    items={itemList}
                    total={calculatePrice(itemList)}
                />
            }

        </div>
    )
}

export default Invoice
