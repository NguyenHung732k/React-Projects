import React, { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react';

import './QRCodeGeneratorStyles.css'

const QRCodeGenerator = () => {

  const [qrCode, setQrCode] = useState("")
  const [input, setInput] = useState("")


  const handleGenerateQRCode = () => {
    setQrCode(input)
    setInput("")
  }

  return (
    <div className="qr-container">
      <h1 style={{ color: "#6d6ff0" }}>QR Code Generator</h1>
      <div className="qr-wrapper">
        <input
          className="qr-input"
          onChange={(event) => setInput(event.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          className="qr-button"
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQRCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCodeSVG id="qr-code-value" value={qrCode} size={300} bgColor="#fff" />
      </div>
    </div>
  )
}

export default QRCodeGenerator