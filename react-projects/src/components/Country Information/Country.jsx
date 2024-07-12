import React, { useState } from 'react'

import CountryInfo from './CountryInfo'
import './CountryStyles.css'

const Country = () => {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!countryName) {
      setError('Please Input Country Name');
      setCountryData(null);
      return;
    }

    const finalURL = `https://restcountries.com/v3.1/name/${countryName.trim()}`;
    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Not Found") {
          setError("Information Not Found");
          setCountryData(null);
        } else if (data.length === 0) {
          setError('Please Input A Valid Name');
          setCountryData(null);
        } else {
          setError('');
          setCountryData(data[0]);
        }
      })
      .catch(() => {
        setError('An error occurred while fetching data.');
        setCountryData(null);
      });
  };


  return (
    <div className="country-container">
      <div className="search-container">
        <input
          className="country-search-input"
          type="text"
          id="countryName"
          placeholder="Input country name..."
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button className="country-search-button" onClick={handleSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
        </button>
      </div>
      {error && <h3>{error}</h3>}
      {countryData && (<CountryInfo countryData={countryData} />)}
    </div>
  )
}

export default Country