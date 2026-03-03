import { useEffect, useState } from "react"

export default function useSavedQueries() {
  const [saved, setSaved] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedQueries") || "[]")
    setSaved(data)
  }, [])

  const saveQuery = (query) => {
    if (!query.trim()) return
    const updated = [query, ...saved.filter(q => q !== query)].slice(0, 8)
    setSaved(updated)
    localStorage.setItem("savedQueries", JSON.stringify(updated))
  }

  return { saved, saveQuery }
}