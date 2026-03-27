import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className='bg-[#15803d] text-white px-5 py-6 flex flex-col md:flex-row justify-between items-center gap-5 '>
                <div>
                    <h1 className='font-bold text-3xl '>Green Trees</h1>
                </div>
                <div className='flex items-center gap-6'>
                    <label className="input text-black w-2xs">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                    <div className="block lg:hidden">
                        <div className="flex items-center gap-1 relative">
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                                0
                            </span>
                            <p className="text-2xl font-bold">
                                <FaCartPlus />
                            </p>
                        </div>
                    </div>

                </div>
                <div className='md:flex gap-6 items-center hidden '>
                    <div className="flex items-center gap-1 relative">
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                            0
                        </span>
                        <p className="text-2xl font-bold">
                            <FaCartPlus />
                        </p>
                    </div>
                    <div>
                        <button className='btn font-bold '>LogIn</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;