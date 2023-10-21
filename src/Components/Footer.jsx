import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="container p-3 p-lg-5">
                <div className="newsletter p-0 p-lg-5">
                <h2 className='text-center fs-1'>Sign Up For An Appointment With The Doctors Today!</h2>
                <div className="w-100 d-flex justify-content-center pt-5">
                <form action="">
                    <input type="text" name='email' placeholder='You Email Address' /><br/>
                    <button className='btn bg-white rounded-4 text-center mt-4 fs-4'>Subscribe</button>
                </form>
                </div>
                </div>
            </div>
            <footer className='py-5'>
                <div className="container py-5">
                    <h2 className='text-center text-white fs-1 mb-5'>WeRcare</h2>
                    <ul className='list-unstyled text-white d-flex justify-content-center flex-wrap'>
                        <li className='px-2 px-lg-3 fs-5'><Link className='text-white text-decoration-none'>Home</Link></li>
                        <li className='px-2 px-lg-3 fs-5'><Link className='text-white text-decoration-none'>About US</Link></li>
                        <li className='px-2 px-lg-3 fs-5'><Link className='text-white text-decoration-none'>Reviews</Link></li>
                        <li className='px-2 px-lg-3 fs-5'><Link className='text-white text-decoration-none'>Contact US</Link></li>
                    </ul>
                    <p className="text-center text-white fs-4 pt-3">Follow us on</p>
                    <ul className='list-unstyled d-flex justify-content-center flex-wrap'>
                        <li className='px-2 px-lg-3 fs-3'><Link className='text-white text-decoration-none'><i class="fa-brands fa-facebook"></i></Link></li>
                        <li className='px-2 px-lg-3 fs-3'><Link className='text-white text-decoration-none'><i class="fa-brands fa-youtube"></i></Link></li>
                        <li className='px-2 px-lg-3 fs-3'><Link className='text-white text-decoration-none'><i class="fa-brands fa-instagram"></i></Link></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
