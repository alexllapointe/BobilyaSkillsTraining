import React from 'react';
import { useState } from 'react';
import { close, menu } from '../assets';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <nav className=" relative z-50 w-full flex py-6 justify-between items-center navbar bg-white">
            <Link to="/joe-website-new/" className="relative z-10">
                <img
                    src={logo}
                    alt="BST"
                    className="w-[120px] h-[50px] rounded-xl ml-4 mt-2 object-cover cursor-pointer"
                    onClick={scrollToTop}
                />
            </Link>

            <ul className="list-none sm:flex hidden mt-4 justify-center items-center flex-1">
                {navLinks.map((nav) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] text-black mr-10`}
                    >
                        <Link
                            to={nav.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                        >

                            <span className="relative">
                                {nav.title}
                                <span className="hover:bg-blue-500 absolute -inset-2 rounded-full opacity-50"></span>
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center pt-4 mr-4">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                />
            </div>
            <div
                className={`${toggle ? 'flex justify-center' : 'hidden'
                    } bg-blue-500 hover:text-gray-200 absolute pt-4 w-full top-28 rounded-xl opacity-90 sidebar`}
            >
                <ul className="list-none flex flex-col justify-center items-center">
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal cursor-pointer text-[22px] text-white mb-4`}
                        >
                            <Link
                                to={nav.to}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-70}
                                onClick={() => setToggle(false)}
                            >
                                <span className="relative">
                                    {nav.title}
                                    <span className="hover:bg-black	 absolute -inset-2 rounded-full opacity-30"></span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
