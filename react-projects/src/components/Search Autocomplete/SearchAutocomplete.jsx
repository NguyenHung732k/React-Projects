import React, { useEffect, useState } from 'react'
import Suggestions from './Suggestions'
import './SearchAutocomplete.css'

const SearchAutocomplete = () => {

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [searchParam, setSearchParam] = useState("")
    const [filteredUsers, setFilteredUsers] = useState([])
    const [showDropdown, setShowDropdown] = useState(false)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://dummyjson.com/users")
                const data = await response.json()

                if (data && data.users && data.users.length) {
                    setUsers(data.users.map((userItem) => userItem.firstName))
                    setLoading(false)
                }

            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }

        fetchUsers()
    }, [])




    const handleChange = (event) => {
        const query = event.target.value.toLowerCase()
        setSearchParam(query)
        if (query.length > 0) {
            const filteredData =
                users && users.length
                    ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
                    : []
            setFilteredUsers(filteredData);
            setShowDropdown(true)
        } else {
            setShowDropdown(false)
        }
    }


    const handleClick = (event) => {
        setShowDropdown(false)
        setSearchParam(event.target.innerText)
        setFilteredUsers([])
    }


    return (

        <div className="suggestion-container">
            {loading ? (
                <h1>Loading...</h1>
            ) :
                <div className="search-box">
                    <input
                        value={searchParam}
                        className="input-search"
                        type="search"
                        placeholder="Search..."
                        onChange={handleChange}
                    />
                </div>
            }

            <ul className="filtered-list">
                {showDropdown && <Suggestions data={filteredUsers} handleClick={handleClick} />}
            </ul>
        </div>
    )
}

export default SearchAutocomplete