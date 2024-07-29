import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import validator from 'validator'


const CardValidator = () => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [date, setDate] = useState(null)
    const [errors, setErrors] = useState('')
    const [cvvValue, setCVVValue] = useState('')
    const [isCVVChange, setIsCVVChange] = useState(false)



    const formatInputNumber = (input) => {
        const formattedInput = input.replace(/\D/g, '')

        const groups = formattedInput.match(/.{1,4}/g)

        return groups ? groups.join(' ') : ''
    }


    const formatCardNumber = (input) => {
        const formattedInput = input.replace(/\D/g, '');

        let formattedNumber = ''
        for (let i = 0; i < formattedInput.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedNumber += '   '
            }
            formattedNumber += formattedInput.charAt(i)
        }

        return formattedNumber
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const validationErrors = {}

        if (!validator.isCreditCard(number)) {
            validationErrors.number = 'Invalid credit card number'
        }

        if (!validator.isLength(cvvValue, { min: 3, max: 3 }) || !validator.isNumeric(cvvValue)) {
            validationErrors.cvv = 'Invalid CVV (must be 3 digits)'
        }

        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            validationErrors.status = 'Submit Successfully !'
        }
    }

    const handleChangeNumber = (event) => {
        const { value } = event.target

        const formattedInput = formatInputNumber(value)
        const formattedValue = formatCardNumber(value)
        setInputValue(formattedInput)
        setNumber(formattedValue)
    }


    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
            <div
                className="w-[500px] h-[300px] bg-white"
                style={{ perspective: '1000px' }}
            >
                <div
                    style={{ transformStyle: 'preserve-3d', transform: isCVVChange ? "rotateY(-180deg)" : "" }}
                    className="group w-full h-full transition-transform duration-1000"
                >

                    {/* Frontside */}
                    <div
                        style={{ backfaceVisibility: "hidden" }}
                        className="w-full h-full absolute t-0 r-0 px-4 py-4 rounded-2xl overflow-hidden z-1 bg-gradient-to-tr from-sky-500 to-pink-500"
                    >
                        <img className="w-full absolute t-0 l-0 z-[-1] opacity-30" src="https://i.ibb.co/PYss3yv/map.png" alt="cardBackground" />
                        <div className="flex justify-between items-center">
                            <img className="w-14" src="https://i.ibb.co/G9pDnYJ/chip.png" alt="chipImg" />
                            <img className="w-16" src="https://i.ibb.co/WHZ3nRJ/visa.png" alt="visaLogo" />
                        </div>

                        <div className="w-full flex justify-center items-center mt-14">
                            <div className="whitespace-pre text-4xl font-semibold text-white">{number || '****   ****   ****   ****'}</div>
                        </div>

                        <div className="flex justify-between items-center mt-14">
                            <div className="text-xs text-white">NAME</div>
                            <div className="text-xs text-white">VALID</div>
                        </div>

                        <div className="flex justify-between items-center mt-1">
                            <div className="text-xl font-semibold text-white">{name ? name : "Name"}</div>
                            <div className="text-xl font-semibold text-white">{date ? ('0' + (date.getMonth() + 1)).slice(-2) : ""} / {date ? ('' + date.getFullYear()).slice(-2) : ""}</div>
                        </div>
                    </div>


                    {/* Backside */}
                    <div
                        style={{ transform: 'rotateY(180deg)', backfaceVisibility: "hidden" }}
                        className="w-full h-full absolute t-0 r-0 px-4 py-4 rounded-2xl overflow-hidden z-1 bg-gradient-to-tr from-sky-500 to-pink-500"
                    >
                        <img className="w-full absolute t-0 l-0 z-[-1] opacity-30" src="https://i.ibb.co/PYss3yv/map.png" alt="cardBackground" />
                        <div className="bg-neutral-500 -mx-8 mt-4 h-10"></div>

                        <div className="w-full flex justify-between items-center mt-5">
                            <div className="flex-1">
                                <img className="w-full h-12 block" src="https://i.ibb.co/S6JG8px/pattern.png" alt="cvvPattern" />
                            </div>
                            <div className="bg-white text-black text-md px-3 py-2">CVV</div>
                        </div>

                        <div className="w-full flex justify-between items-center mt-16">
                            <div>CUSTOMER SIGNATURE</div>
                            <img className="w-20" src="https://i.ibb.co/WHZ3nRJ/visa.png" alt="visaLogo" />
                        </div>
                    </div>

                </div>
            </div>

            <form className="relative w-96 flex flex-col justify-center items-center gap-4 p-6 border border-gray-200 rounded-lg shadow">
                {errors ?
                    <div>
                        <div className="text-xs text-red-600">
                            {errors.number} <br />
                            {errors.cvv}
                        </div>
                        <div className="text-xs text-green-600">
                            {errors.status}
                        </div>
                    </div>
                    : ''
                }


                <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
                    placeholder="Name"
                    required
                />
                <div className="w-full flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block">
                    <input
                        value={inputValue}
                        onChange={handleChangeNumber}
                        type="text"
                        className="w-full h-10 ml-2 outline-none rounded-lg"
                        placeholder="Enter your credit card number"
                        pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                        maxLength="19"
                        required
                    />
                    <div className="inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                        <svg fill="none" className="h-6 text-[#1434CB]" viewBox="0 0 36 21"><path fill="currentColor" d="M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z" /></svg>
                    </div>
                </div>



                <div className="w-full flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block">
                    <svg className="w-4 h-4 text-gray-500 mx-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>

                    <DatePicker
                        className="w-full h-10 ml-2 bg-gray-50 outline-none rounded-lg"
                        selected={date ? date : new Date()}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        onChange={(date) => setDate(date)}
                    />
                </div>
                <div className="flex justify-center items-center gap-4">
                    <input
                        value={cvvValue}
                        onChange={(event) => setCVVValue(event.target.value)}
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700"
                        placeholder="CVV"
                        required
                    />
                    <button
                        onClick={() => setIsCVVChange(!isCVVChange)}
                        type="button"
                        className="w-full h-10 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
                        {isCVVChange ? "Hide CVV" : "Show CVV"}
                    </button>

                </div>

                <button
                    onClick={handleSubmit}
                    type="button"
                    className="w-full h-10 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CardValidator