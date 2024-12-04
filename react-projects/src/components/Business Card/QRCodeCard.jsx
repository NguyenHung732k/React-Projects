import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode.react'

const QRCodeCard = ({ userData }) => {
    const [shortenedUrl, setShortenedUrl] = useState('')

    const generateShortenedUrl = async (userData) => {
        const cardId = Date.now()
        const url = `https://example.com/card/${cardId}`

        setShortenedUrl(url)
    }

    useEffect(() => {
        if (userData) {
            generateShortenedUrl(userData)
        }
    }, [userData])

    return (
        <div className="flex flex-col justify-center items-center my-4">
            {shortenedUrl ? (
                <>
                    <QRCode value={shortenedUrl} size={256} fgColor="#000000" bgColor="#ffffff" />
                    <p className="mt-2 text-center text-sm text-gray-700">
                        Scan this QR code to view the card
                    </p>
                </>
            ) : (
                <p className="text-center text-sm text-gray-500">Generating QR Code...</p>
            )}
        </div>
    )
}

export default QRCodeCard