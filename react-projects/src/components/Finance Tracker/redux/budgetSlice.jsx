import { createSlice } from '@reduxjs/toolkit'


const budgetSlice = createSlice({
    name: 'budget',
    initialState: [],
    reducers: {
        setBudget: (state, action) => {
            state.push(action.payload)
        },
        removeBudget: (state, action) => {
            return state.filter(budget => budget.id !== action.payload)
        }
    }
})

export const { setBudget, removeBudget } = budgetSlice.actions
export default budgetSlice.reducer