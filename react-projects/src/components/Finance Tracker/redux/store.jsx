import { configureStore } from '@reduxjs/toolkit'
import incomeReducer from './incomeSlice'
import expenseReducer from './expenseSlice'
import budgetReducer from './budgetSlice'
import { saveToLocalStorage, getFromLocalStorage } from '../utils/localStorage'

const store = configureStore({
  reducer: {
    income: incomeReducer,
    expense: expenseReducer,
    budget: budgetReducer,
  },
  preloadedState: {
    income: getFromLocalStorage('income') || [],
    expense: getFromLocalStorage('expense') || [],
    budget: getFromLocalStorage('budget') || [],
  }
})

store.subscribe(() => {
  saveToLocalStorage('income', store.getState().income)
  saveToLocalStorage('expense', store.getState().expense)
  saveToLocalStorage('budget', store.getState().budget)
})

export default store