import React from 'react';
import logo from '../assets/logo (2).png'
import email from '../assets/email.png'
import github from '../assets/github.png'
import blog from '../assets/blog.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
       
            <div className='flex flex-row justify-between items-center'>

                <div>
                    <div className="avatar">
                        <div className="w-20 rounded ">
                           <Link to='/'> <img src={logo} alt="Tailwind-CSS-Avatar icon-component" /></Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row gap-6'>

                    <div>
                        <div className="avatar icon ">
                            <div className="w-7 rounded">
                                <Link to='/contact-me'>
                                    <img src={email} alt="Tailwind-CSS-Avatar icon-component" />
                                </Link>
                            </div>
                        </div>
                    </div>

                   

                    <div>
                        <div className="avatar icon ">
                            <div className="w-7 rounded">
                              <Link to='/blog'>  <img src={blog} alt="Tailwind-CSS-Avatar icon-component" /></Link>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="avatar icon ">
                            <div className="w-7 rounded">
                                
                                <a href='https://github.com/ishratzahan6102'><img src={github} alt="Tailwind-CSS-Avatar icon-component" /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        
    );
};

export default Navbar;