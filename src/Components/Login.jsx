import React from 'react'
import LoginForm from './LoginForm'

export default function Login() {
    return (
        <div className="secondary-container py-5">
            <div className="container p-4">
                <div className="row login-container">
                    <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
                        <div className="img-circle-box mb-3 mb-lg-5">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/p-1.png`} alt="" />
                            <img src={`${process.env.PUBLIC_URL}/assets/img/p-3.png`} alt="" />
                            <img src={`${process.env.PUBLIC_URL}/assets/img/p-2.png`} alt="" />
                        </div>
                        <h2 className='fs-1 fw-light text-white'>Connect With Your Doctor</h2>
                    </div>
                    <div className="col-md-6 px-0 px-lg-5 py-3 py-lg-5">
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}
