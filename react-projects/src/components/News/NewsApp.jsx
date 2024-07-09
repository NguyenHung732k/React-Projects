import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from './NavBar'
import News from './News'

const NewsApp = () => {
    return (
        <BrowserRouter>
            <div className="news-container">

                <NavBar />

                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <Routes>
                                <Route
                                    path="/"
                                    element={<News key="general" category="general" />}
                                />
                                <Route
                                    path="/Entertainment"
                                    element={<News key="entertainment" category="entertainment" />}
                                />
                                <Route
                                    path="/Technology"
                                    element={<News key="technology" category="technology" />}
                                />
                                <Route
                                    path="/Sports"
                                    element={<News key="sports" category="sports" />}
                                />
                                <Route
                                    path="/Business"
                                    element={<News key="business" category="business" />}
                                />
                                <Route
                                    path="/Health"
                                    element={<News key="health" category="health" />}
                                />
                                <Route
                                    path="/Science"
                                    element={<News key="science" category="science" />}
                                />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default NewsApp