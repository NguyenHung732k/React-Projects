import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dictionary = () => {

    const [data, setData] = useState('')
    const [word, setWord] = useState('')
    const [error, setError] = useState(false)



    const fetchDictionary = async () => {

        try {
            await axios
                .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                .then((response) => { setData(response.data[0]) })
                .then(setError(false))
        } catch (error) {
            setError(true)
            console.log(error)
            console.log(data)
        }
    }


    return (
        <div className="w-screen h-screen flex flex-col items-center p-20 gap-20">
            <div className="w-96 flex items-center">
                <div className="w-full">
                    <input
                        value={word}
                        onChange={(event) => setWord(event.target.value)}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Search word..."
                        required
                    />
                </div>
                <button
                    type='submit'
                    onClick={() => fetchDictionary()}
                    className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </div>

            {error ?
                <div className="flex flex-col items-center p-8 bg-white border border-gray-200 rounded-lg shadow gap-4">
                    <h5 className="text-xl font-bold text-gray-900">Could not find definitions</h5>
                    <h5 className="text-xl font-bold text-gray-900">Please try again</h5>
                </div>
                :
                data &&
                <div className="flex flex-col p-8 bg-white border border-gray-200 rounded-lg shadow gap-4">
                    <h5 className="text-4xl font-bold text-gray-900">{data.word}</h5>
                    <div className="grid grid-cols-1 divide-y gap-4">
                        {data.meanings && data.meanings.map((meaning, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-2"
                            >
                                <h4 className="mt-2">Parts of speech: <span className="ml-8 text-xl italic">{meaning.partOfSpeech}</span> </h4>

                                <h4 className="flex flex-col gap-2"> Definition:
                                    {meaning && meaning.definitions && meaning.definitions.map((definition, index) => (
                                        <span className="ml-32 text-xl italic" key={index}>
                                            - {definition.definition}
                                        </span>
                                    ))}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>

            }
        </div>
    )
}

export default Dictionary