import React from 'react'
import UseFetchHook from './UseFetchHook'

const UseFetch = () => {

    const { data, error } = UseFetchHook("https://jsonplaceholder.org/posts", {})

    console.log(data)
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1>Use Fetch Hook</h1>
            {error ? <h3>{error}</h3> : null}
            {data && data.length ? data.map((item) => (
                <p key={item.id}>Item :{item.title}</p>
            ))
                : null}
        </div>
    )
}

export default UseFetch