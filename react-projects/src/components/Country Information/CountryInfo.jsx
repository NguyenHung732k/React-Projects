import React from 'react'

const CountryInfo = ({ countryData }) => {
    return (
        <div className="country-info">
            <div className="country-main-info">
                <img src={countryData.flags.svg} alt="Flag Image" style={{ width: '200px', margin: "35px", border: "1px solid #ced4da" }} />

                <div>
                    <h3>Name: {countryData.name.common} - {countryData.name.official}</h3>
                    <h5>Capital: {(countryData.capital) ? Object.values(countryData.capital).toString().split(',').join(' - ') : ""}</h5>
                    <h5>Region: {countryData.region} - {countryData.subregion}</h5>
                    <h5>Timezones: {(countryData.timezones) ? Object.values(countryData.timezones).toString().split(',').join(' / ') : ""}</h5>
                </div>
            </div>

            <hr style={{ width: '100%', border: "1px solid black" }} />

            <div className="country-sub-info">
                <div style={{ width: '50%' }}>
                    <h6><strong>Population:</strong> {countryData.population}</h6>
                    <h6><strong>Area:</strong> {countryData.area} km<sup>2</sup></h6>
                    <h6><strong>Border:</strong> {(countryData.borders) ? Object.values(countryData.borders).toString().split(',').join('-') : ""} </h6>
                    <h6><strong>Calling Code:</strong> {(countryData.idd.suffixes) ? (countryData.idd.suffixes).map((suffix, index) => (countryData.idd.root + countryData.idd.suffixes[index] + " ")).toString().split(',').join(' / ') : ""}</h6>
                    <h6><strong>Code of International Olympic Committee:</strong> {countryData.cioc}</h6>
                    <h6><strong>Currencies:</strong> {countryData.currencies[Object.keys(countryData.currencies)[0]].name} - symbol: {countryData.currencies[Object.keys(countryData.currencies)[0]].symbol}</h6>
                    <h6><strong>Continents:</strong> {(countryData.continents) ? Object.values(countryData.continents).toString().split(',').join(' - ') : ""}</h6>
                    <h6><strong>Languages:</strong> {(countryData.languages) ? Object.values(countryData.languages).toString().split(',').join(' - ') : ""}</h6>
                </div>

                <div style={{ width: '50%' }}>
                    <h6><strong>Coordinates:</strong> Latitude: {countryData.latlng[0]} - Longitude: {countryData.latlng[1]}</h6>
                    <h6><strong>Demonyms in Eng:</strong> Female: {countryData.demonyms[Object.keys(countryData.demonyms)[0]].f} - Male: {countryData.demonyms[Object.keys(countryData.demonyms)[0]].m}</h6>
                    <h6><strong>Demonyms in Fra:</strong> Female: {countryData.demonyms[Object.keys(countryData.demonyms)[1]].f} - Male: {countryData.demonyms[Object.keys(countryData.demonyms)[1]].m}</h6>
                    <h6><strong>Fifa Name Code:</strong> {countryData.fifa}</h6>
                    <h6><strong>Car Side:</strong> {countryData.car.side}</h6>
                    <h6><strong>Top Level Domain:</strong> {(countryData.tld) ? Object.values(countryData.tld).toString().split(',').join(' / ') : ""}</h6>
                    <h6><strong>UN Member:</strong> {countryData.unMember === true ? "Yes" : "No"}</h6>
                </div>
            </div>


        </div>
    )
}

export default CountryInfo