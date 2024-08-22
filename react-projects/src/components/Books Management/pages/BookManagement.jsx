import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../features/store'

import BookForm from '../components/BookForm'
import BookList from '../components/BookList'

const BookManagement = () => {
    return (
        <Provider store={store}>
            <div className="flex flex-col justify-center items-center p-8 gap-8">
                <h1>Book Management</h1>
                <BookForm />
                <BookList />
            </div>
        </Provider>
    )
}

export default BookManagement