import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand fs-2" to="#"><strong>WeRcare</strong></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item px-1 px-md-5 ">
                            <Link className="nav-link text-dark fw-semibold" aria-current="page" to="/login">I am a Doctor</Link>
                        </li>
                        <li className="nav-item px-1 px-md-5 ">
                            <Link className="nav-link text-dark fw-semibold" to="/login">I am a Patient</Link>
                        </li>
                        <li className="nav-item px-1 px-md-5 ">
                            <Link className="nav-link text-dark fw-semibold" to="/login">I am a Family Member</Link>
                        </li>
                    </ul>
                    <Link className='btn bg-white rounded-4' to="#">Book an appointment</Link>
                </div>
            </div>
        </nav>
    )
}
