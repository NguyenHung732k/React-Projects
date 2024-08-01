import React, { useState } from 'react'


import rockImg from '../../assets/rock.png'
import paperImg from '../../assets/paper.png'
import scissorsImg from '../../assets/scissors.png'



const Game = () => {

    const choices = ["Rock", "Paper", "Scissors"]
    const choicesIcon = {
        Rock: rockImg,
        Paper: paperImg,
        Scissors: scissorsImg,
    }

    const getRandomChoice = () => {
        return choices[Math.floor(Math.random() * choices.length)]
    }

    const [userChoice, setUserChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [result, setResult] = useState('')
    const [score, setScore] = useState(0)



    const win = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return "Draw"
        } else if ((userChoice === "Rock" && computerChoice === "Scissors") || (userChoice === "Paper" && computerChoice === "Rock") || (userChoice === "Scissors" && computerChoice === "Paper")) {
            return "You"
        } else {
            return "Computer"
        }
    }


    const play = (choice) => {
        const computer = getRandomChoice()
        setUserChoice(choice)
        setComputerChoice(computer)

        const gameResult = win(choice, computer)
        setResult(gameResult)

        if (gameResult === "You") {
            setScore(prev => prev + 1)
        }
    }



    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col items-center p-6 border border-gray-200 rounded-lg shadow">
                <h1 className="text-2xl font-bold mb-4">Rock Paper Scissors</h1>

                <div className="flex space-x-4 mb-4">
                    {choices.map((choice) => (
                        <button
                            key={choice}
                            className="bg-wwhite text-white px-4 py-2 border rounded flex items-center space-x-2"
                            onClick={() => play(choice)}
                        >
                            <img
                                src={choicesIcon[choice]}
                                alt={choice}
                                className="w-12 h-12"
                            />
                        </button>
                    ))}
                </div>

            </div>
            {userChoice && (
                <div className="w-2/6 flex flex-col justify-center items-center gap-8 text-lg font-medium p-6 border border-gray-200 rounded-lg shadow">
                    <h1 className="text-2xl font-bold mb-4">Your scores: {score}</h1>

                    <div className="w-full flex justify-evenly items-center gap-8">

                        <div className="flex flex-col justify-center items-center">
                            <p>You:</p>
                            <img
                                src={choicesIcon[userChoice]}
                                alt={userChoice}
                                className="w-12 h-12"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <p>Computer</p>
                            <img
                                src={choicesIcon[computerChoice]}
                                alt={computerChoice}
                                className="w-12 h-12"
                            />
                        </div>
                    </div>
                    <p>{result === "Draw" ? "It's a Draw!" : `${result} Win!`}</p>
                </div>
            )}
        </div>
    )
}

export default Game