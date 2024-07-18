import React from 'react'
import { useNavigate } from 'react-router-dom'


const DisplayAnswers = ({ data, answers }) => {

    const navigate = useNavigate()


    const handleSubmit = () => {
        navigate('/thanks')
    }

    console.log(answers)

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-[600px] h-[500px] flex flex-col justify-evenly items-center p-4 border border-solid border-gray rounded-lg bg-white/45 backdrop-blur-xl">
                <h4>Entered Details</h4>
                <div className="w-full flex flex-col justify-center items-start">
                    <p> <b>Name:</b> {data.name} </p>
                    <p> <b>Email:</b> {data.email} </p>
                    <p> <b>Contact No.:</b> {data.contact} </p>
                </div>

                <h4>Responses</h4>
                <div className="w-full flex flex-col justify-center items-start">
                    {answers && answers.map((answer, index) => (
                        <div key={index}>
                            <p className="m-0">{index + 1}. {answer}</p>
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full mt-4 px-5 py-2.5 text-center"
                >
                    Next
                </button>

            </div>
        </div>
    )
}

export default DisplayAnswers