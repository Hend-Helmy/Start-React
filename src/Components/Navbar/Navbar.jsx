import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {

    render() {
        return <>
        <nav className="navbar navbar-expand-lg py-4 ">
            <div className="container">
                <Link className="navbar-brand text-white fw-bold " to='/home'>Start React</Link>
                <button className="navbar-toggler py-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                MENU<span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0  w-50 justify-content-between">
                        <li className="nav-item">
                        <Link className="nav-link fw-bold" aria-current="page" to='/portfolio'>PORTFOLIO</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link  fw-bold" to='/about'>ABOUT</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link  fw-bold" to='/contact'>CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>;
    }
}

export default Navbar;
