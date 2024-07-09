import React from 'react'
import { Link } from 'react-router-dom'

import './NavBarStyles.css'


const NavBar = () => {
    return (
        <nav className="navbar-container">
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar navbar-expand-lg">
                <ul className="navbar-list">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={`/`}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={`/Entertainment`}>
                            Entertainment
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={`/Technology`}>
                            Technology
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={`/Sports`}>
                            Sports
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={`/Business`}>
                            Business
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={`/Health`}>
                            Health
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={`/Science`}>
                            Science
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>


    )
}

export default NavBar