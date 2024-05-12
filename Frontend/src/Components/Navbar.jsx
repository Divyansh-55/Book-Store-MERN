import React from 'react'
import Logo from "../assets/book_navbar.avif";  
export default function Navbar() {
    return (
        <>
            <div>
                <div className="navbar bg-base-100 bg-slate-200 lg:px-20">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2  w-30 text-base font-serif font-medium">
                                <li><a>Home</a></li>
                                <li><a>Course</a></li>
                                <li><a>Contact</a></li>
                                <li><a>About</a></li>
                            </ul>
                        </div>
                        <a className="font-bold text-2xl cursor-pointer">Book Store</a>
                    </div>
                    <div className="lg:flex'">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-lg font-serif font-medium">
                                <li><a>Home</a></li>
                                <li><a>Course</a></li>
                                <li><a>Contact</a></li>
                                <li><a>About</a></li>
                            </ul>
                            <label className="input input-bordered flex items-center h-11 w-15 mr-10 mt-2">
                                <input type="text" placeholder="Search" className="bg-black" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                        </div>
                    
                        <div className="navbar-end ">
                            <a className="btn bg-primary text-white text-xl hover:bg-slate-500 hover:text-black">Login</a>
                        </div>
                        </div>
                </div>
            </div>
        </>
    )
}
