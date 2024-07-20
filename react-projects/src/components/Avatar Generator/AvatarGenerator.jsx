import React, { useState } from 'react'
import axios from 'axios'

const AvatarGenerator = () => {

    const styles =
        ["adventurer", "adventurer-neutral", "avataaars", "avataaars-neutral",
            "avataaars-neutral", "big-ears", "big-ears-neutral", "big-smile", "bottts",
            "bottts-neutral", "croodles", "croodles-neutral", "fun-emoji", "icons",
            "identicon", "initials", "lorelei", "lorelei-neutral", "micah",
            "miniavs", "notionists", "notionists-neutral", "open-peeps", "personas",
            "pixel-art", "pixel-art-neutral", "rings", "shapes", "thumbs",
        ]

    const [sprite, setSprite] = useState("adventurer")
    const [seed, setSeed] = useState(1000)


    const handleSprite = (spritetype) => {
        setSprite(spritetype)
    }

    const handleGenerate = () => {
        let x = Math.floor(Math.random() * 1000)
        setSeed(x)
    }


    const downloadImage = () => {
        axios({
            url: `https://api.dicebear.com/9.x/${sprite}/svg?seed=${seed}`
        })
            .then((response) => {
                var link = document.createElement("a")
                link.href = window.URL.createObjectURL(new Blob([response.data], { type: "application/octet-stream" }))
                link.download = `${seed}.svg`
                document.body.appendChild(link)
                link.click()
                setTimeout(function () {
                    window.URL.revokeObjectURL(link)
                }, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-full h-full flex flex-col justify-center items-center text-white text-xl gap-4 p-8">
                <div className="w-full flex flex-wrap justify-center items-center">
                    {styles.map((style, index) =>
                        <button
                            key={index}
                            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-2 py-2.5 text-center me-2 mb-2"
                            onClick={() => handleSprite(style)}>
                            {style}
                        </button>
                    )}
                </div>
                <div className="w-2/4 h-2/4 max-w-[300px] max-h-[300px] my-11">
                    <img src=
                        {`https://api.dicebear.com/9.x/${sprite}/svg?seed=${seed}`} alt="Sprite" />
                </div>
                <div>
                    <button
                        onClick={() => handleGenerate()}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2.5 py-2.5 me-2 mb-2">
                        Next
                    </button>

                    <button
                        onClick={() => downloadImage()}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2.5 py-2.5 me-2 mb-2">
                        Download
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AvatarGenerator