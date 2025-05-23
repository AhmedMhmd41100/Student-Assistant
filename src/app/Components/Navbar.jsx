import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a>Home</a></li>
          <li><a>Courses</a></li>
          <li><a>Resources</a></li>
        </ul>
      </div>
      <img className='h-10 w-10' src="./logo.png" alt="Logo" />
      <a href='/' className="btn btn-ghost text-xl">Student Assistant</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-8 font-semibold">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/courses">Courses</Link></li>
        <li><Link href="/resources">Resources</Link></li>
      </ul>
    </div>
    <div className="navbar-end gap-6">
      <Link href="/sign-in" className="btn">Sign In</Link>
      <Link href="/sign-up" className="btn">Sign Up</Link>
    </div>
  </div>
  )
}

export default Navbar