import React from 'react'
import { NavLink } from 'react-router-dom'

import '../index.css'
const NavBar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" href="#">NirajLalwani</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0 gap-3 ">
                                        <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) =>
                                                    `nav-link ${isActive ? "menu_active" : ''}`
                                                }
                                                to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) =>
                                                    `nav-link ${isActive ? "menu_active" : ''}`
                                                }
                                                to="services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) =>
                                                    `nav-link ${isActive ? "menu_active" : ''}`
                                                }
                                                to="about">About</NavLink>

                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className={({ isActive }) =>
                                                    `nav-link ${isActive ? "menu_active" : ''}`
                                                }
                                                to="contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
