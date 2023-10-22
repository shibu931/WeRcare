import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginForm() {
    return (
        <div className="login-form pe-0 pe-lg-5 w-100 py-5">
            <h2 className='fw-normal mb-5'>Login to your Account</h2>
            <form action="">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control py-3 bg-white" id="exampleInputEmail1" placeholder='Email Address' aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control py-3 bg-white" id="exampleInputPassword1" placeholder='Password'/>
                </div>
                <div class="mb-5 form-check">
                    <input type="checkbox" class="form-check-input border" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                </div>
                <button type="submit" class="btn btn-primary rounded-4 fs-4 fw-medium w-100 mb-3 mb-lg-5">SIGN IN</button>
                <button type="submit" class="btn btn-google rounded-4 fs-4 fw-thin w-100">Continue with Google</button>
                <p className='text-center mt-3'>Forgot Your Password <Link to="" className='text-decoration-none'>Reset</Link></p>
                <p className='text-center mt-3'>Don't have an account? <Link to="" className='text-decoration-none'>Sign Up</Link></p>
            </form>
        </div>
    )
}
