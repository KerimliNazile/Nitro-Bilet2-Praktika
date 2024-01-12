import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import './index.scss'
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="NavbarMain">
                    <div className="ImageNav">
                        <h1>Nitro.</h1>
                    </div>
                    <div className="NavArea">
                        <ul className='NavMain'>
                            <li><NavLink to={'/home'}>Home</NavLink></li>

                            <li className='About'><NavLink to={'/about'}>About Us</NavLink>
                                <div className="SubMenu">
                                    <div className="SubMenuArea">
                                        <ul className='SubLi'>
                                            <li>Team</li>
                                            <li>Pricing</li>
                                            <li>FAQ</li>
                                            <li>More Links</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
                            <li><NavLink to={'/services'}>Services</NavLink></li>
                            <li><NavLink to={'/testimonials'}>Testimonials</NavLink></li>
                            <li><NavLink to={'/blog'}>Blog</NavLink></li>
                            <li><NavLink to={'/Contact'}>Contact</NavLink></li>
                            <li><NavLink to={'/add'}>Add page</NavLink></li>
                            <li><NavLink to={'/wishlist'}><FaHeart /></NavLink></li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar
