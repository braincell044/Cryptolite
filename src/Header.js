import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css';
import './App.css'
import React, { useState } from 'react';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => setMenu(!menu);

    return (
        <div className='navbar-content fixed-top'>
            <div className="container text-center fixed-top">
                <div className="row flex-toggle">
                    <div className="col">
                        <div className='col text-start d-flex displayhide'>
                            <div className="py-3 px-5 displayhide">
                                <a href="/" className='nav-link'><h1 className='head-1'>cryptolite<span className='intro'>trade</span></h1></a>
                            </div>
                            <a href="#home" className='nav-link link-1 p-3'>HOME</a>
                            <a href="#about" className='nav-link link-1 p-3'>ABOUT US</a>
                            <a href="#investment" className='nav-link link-1 p-3'>INVESTMENT PLANS</a>
                            <a href="#referral" className='nav-link link-1 p-3'>REFERRALS</a>
                            <a href="#contact" className='nav-link link-1 p-3'>CONTACT</a>
                        </div>
                    </div>
                    <div className="col py-3 displayhide">
                        <a href="/signup"><button className='btn reg link-1 mx-1'>Register an account</button></a>
                        <a href="/login"><button className='btn sign-2 link-1'>Sign in</button></a>
                    </div>
                </div>
            </div>

            <div className='w-100 d-flex '>
                <div className="col py-3 displaynone">
                    <h1 className='head-1'>cryptolite<span className='intro'>trade</span></h1>
                </div>

                <div className='px-3 py-4'>
                    <i className='bx bx-menu fs-1 displaynone flex-h' onClick={handleMenu}></i>
                </div>
            </div>

            {menu && (
                <div className='col text-start displaynone'>
                    <a href="#home" className='nav-link link-1 p-3'>HOME</a>
                    <a href="#about" className='nav-link link-1 p-3'>ABOUT US</a>
                    <a href="#investment" className='nav-link link-1 p-3'>INVESTMENT PLANS</a>
                    <a href="#referral" className='nav-link link-1 p-3'>REFERRALS</a>
                    <a href="#contact" className='nav-link link-1 p-3'>CONTACT</a>

                    <div className='py-3'>
                        <a href="/signup"><button className='btn reg link-1 mx-1'>Register an account</button></a>
                        <a href="/login"><button className='btn sign-2 link-1'>Sign in</button></a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
