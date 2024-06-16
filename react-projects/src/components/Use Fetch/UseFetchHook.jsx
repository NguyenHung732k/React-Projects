import React from 'react'
import { useEffect, useState } from "react";

const UseFetchHook = (url, options = {}) => {

  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { ...options })
        if (!response.ok) throw new Error(response.statusText);

        const result = await response.json()

        setData(result)
        setError(null)

      } catch (error) {
        setError(`${error}`)
      }
    }
    fetchData()
  }, [])

  return { data, error }

}

export default UseFetchHook