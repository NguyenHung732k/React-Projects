import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Dashboard from './Dashboard'


const Home = () => {
    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    )
}

export default Home