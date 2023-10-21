import React from 'react'

export default function Home() {
    return (
        <>
            {/* Banner */}
            <div className="hero-banner mb-5">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-sm-6 col-lg-7">
                            <div className="banner-title mb-5">
                                <h1 className='fw-semibold display-4 text-black mb-4'>Protecting You And Your Family</h1>
                                <p className='fs-3 text-black'>Your health and wellbeing is important for us</p>
                            </div>
                            <form action="">
                                <div className="search-box">
                                    <input type="text" name="search" placeholder="How can we help you?" />
                                    <button type='submit' ><i class="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-6 col-lg-5 pt-5">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/woman-2141808_640-removebg-preview 1.png`} width="100%" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner End*/}

            {/* USP Section */}
            <div className="container px-lg-5 pb-5 mb-5">
                <div className="usp-section">
                    <div className="usp-box">
                        <h2 className='text-center display-5 fw-semibold'>5.0</h2>
                        <p className='text-center fs-3 mb-0'>User Rating</p>
                        <span className='text-warning fs-5'>
                            <i className='fa-solid fa-star px-2'></i>
                            <i className='fa-solid fa-star px-2'></i>
                            <i className='fa-solid fa-star px-2'></i>
                            <i className='fa-solid fa-star px-2'></i>
                            <i className='fa-solid fa-star px-2'></i>
                        </span>
                    </div>
                    <div className='vr-line d-none d-lg-block'></div>
                    <div className="usp-box">
                        <h2 className='text-center display-5 fw-semibold'>96%</h2>
                        <p className='text-center fs-3'>Consumer Statisfaction</p>
                    </div>
                    <div className='vr-line d-none d-lg-block'></div>
                    <div className="usp-box">
                        <h2 className='text-center display-5 fw-semibold'>+1 M</h2>
                        <p className='text-center fs-3'>Active Users</p>
                    </div>
                </div>
            </div>
            {/* USP Section End */}

            {/* Who we are */}
            <div className="container mb-5">
                <div className="row row-cols-10 py-5 justify-content-center">
                    <div className="col-sm-5">
                        <img className='ps-lg-5' src={`${process.env.PUBLIC_URL}/assets/img/Vector (1).png`} alt="" />
                    </div>
                    <div className="col-sm-5">
                        <h2 className='fs-1 mb-5'>Who we are?</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos et eos impedit quibusdam obcaecati ipsam quis voluptatibus, aut enim quos qui atque commodi provident laboriosam, quod consequuntur! Praesentium, iusto doloremque earum tempore molestias delectus ea cupiditate architecto voluptates. Libero facilis quidem expedita quae optio ullam ratione molestiae dolore cumque odit.</p>
                    </div>
                </div>
            </div>
            {/* Who we are End */}

            {/* Our Speciality */}
            <div className="speciality-container py-5 mb-5">
                <div className="container px-4 px-lg-5">
                    <h2 className='text-center text-black fs-1 my-5 py-4 fw-semibold'>Our Speciality</h2>
                    <div className="row row-cols-2 row-cols-lg-4 g-3">
                        <div className="col">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/Rectangle 18.png`} className='mb-4' alt="" />
                            <p className='text-center text-black fs-4'>Dermatology</p>
                        </div>
                        <div className="col">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/Rectangle 20.png`} className='mb-4' alt="" />
                            <p className='text-center text-black fs-4'>Gynecology</p>
                        </div>
                        <div className="col">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/Rectangle 21.png`} className='mb-4' alt="" />
                            <p className='text-center text-black fs-4'>Cardiology</p>
                        </div>
                        <div className="col">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/Rectangle 22.png`} className='mb-4' alt="" />
                            <p className='text-center text-black fs-4'>Orthopedic</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Speciality End */}

            {/* USP 2 Section */}
            <div className="container px-4 px-lg-5 py-5 mb-5">
                <h2 className='text-center fs-1 fw-semibold text-black mb-5'>Why you should choose us?</h2>
                <div className="row row-cols-2 row-cols-lg-4 g-3">
                    <div className="col usp-box-2">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/stethoscope-147700_640 1.png`} className='mb-4' alt="" />
                        <p className='text-center text-black fs-4'>All Specialities</p>
                    </div>
                    <div className="col usp-box-2">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/support-6759234_640 1.png`} className='mb-4' alt="" />
                        <p className='text-center text-black fs-4'>24/7 Support</p>
                    </div>
                    <div className="col usp-box-2">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/sign-1086702_640 1.png`} className='mb-4' alt="" />
                        <p className='text-center text-black fs-4'>Privacy & Security</p>
                    </div>
                    <div className="col usp-box-2">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/medical-312324_640 1.png`} className='mb-4' alt="" />
                        <p className='text-center text-black fs-4'>Primary Case</p>
                    </div>
                </div>
            </div>
            {/* USP 2 Section End */}

            {/* Testimonials */}
            <div className="container py-5">
                <h2 className='text-center fs-1 fw-semibold mb-4'>What paitents says about us</h2>
                <div className="reviews-container py-4">
                    <div className="row row-cols-1 row-cols-sm-2 g-lg-5 g-2">
                        <div className="col px-lg-5">
                            <div className="review-box">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/Mask group (1).png`} className='mt-2' width={80} height={80} alt="" />
                                <div>
                                    <h4 className='mb-4'>Lynsey</h4>
                                    <span className='text-warning fs-4'>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </span>
                                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque laboriosam similique consequatur? Consequuntur, quas?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col px-lg-5">
                            <div className="review-box">
                                <img src={`${process.env.PUBLIC_URL}/assets/img/Mask group.png`} className='mt-2' width={80} height={80} alt="" />
                                <div>
                                    <h4 className='mb-4'>Gerald</h4>
                                    <span className='text-warning fs-4'>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                        <i className='fa-solid fa-star'></i>
                                    </span>
                                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque laboriosam similique consequatur? Consequuntur, quas?</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Testimonials End */}

        </>
    )
}
