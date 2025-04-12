import React from 'react'
import Table from './Table'

const data = [
    { name: 'John Doe', age: 28, country: 'USA' },
    { name: 'Jane Smith', age: 34, country: 'UK' },
    { name: 'Sally Johnson', age: 25, country: 'Canada' },
    { name: 'Mike Brown', age: 40, country: 'Australia' },
    { name: 'Anna Lee', age: 32, country: 'Germany' },
]

const columns = [
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Age',
        accessor: 'age',
    },
    {
        Header: 'Country',
        accessor: 'country',
    },
]

const DataTable = () => {
    return (
        <div>
            <Table data={data} columns={columns} />
        </div>
    )
}

export default DataTable