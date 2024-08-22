import { createSlice, nanoid } from '@reduxjs/toolkit'

const booksSlice = createSlice({
    name: 'books',
    initialState: [],
    reducers: {
        addBook: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, author) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        author,
                    }
                }
            }
        },

        removeBook(state, action) {
            return state.filter(book => book.id !== action.payload)
        },

        updateBook(state, action) {
            const {id, title, author} = action.payload
            const existingBook = state.find(book => book.id === id)

            if (existingBook) {
                existingBook.title = title
                existingBook.author = author
            }
        }
    }
})

export const { addBook, removeBook, updateBook } = booksSlice.actions
export default booksSlice.reducer