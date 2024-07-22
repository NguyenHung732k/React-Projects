import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Map from './Map';

import './IPFinderStyles.css'

const IPFinder = () => {

  const [ipDetails, setIpDetails] = useState([])
  const [lat, setLat] = useState(-3.745)
  const [lon, setLon] = useState(-38.523)
  const [address, setAddress] = useState("8.8.8.8")
  const [input, setInput] = useState("")


  useEffect(() => {
    axios.get(`http://ip-api.com/json/${address}`).then((res) => {
      setIpDetails(res.data)
      setLat(res.data.lat)
      setLon(res.data.lon)
    })
  }, [address])


  const handleClick = () => {
    setAddress(input)
    setInput("")
  }


  return (
    <div className="ip-container">
      <div className="main-container">
        <div className="info">
          <div className="input-container">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="search-input"
              type="text"
              placeholder={address}
            />
            <button
              onClick={handleClick}
              className="ip-finder-button"
            >
              Search
            </button>
          </div>

          <h2>IP Address Finder</h2>
          <h1>{ipDetails.query}</h1>
        </div>


        <Map lattitude={lat} longitude={lon} />
      </div>

      <div className="detail-container">
        <div><h3>City: </h3> <p>{ipDetails.city}</p></div>
        <div><h3>Country: </h3><p>{ipDetails.country}</p></div>
        <div><h3>Region: </h3><p>{ipDetails.region}</p></div>
        <div><h3>ORG: </h3><p>{ipDetails.org}</p></div>
        <div><h3>ISP: </h3><p>{ipDetails.isp}</p></div>
        <div><h3>AS: </h3><p>{ipDetails.as}</p></div>
      </div>

    </div>
  )
}

export default IPFinder