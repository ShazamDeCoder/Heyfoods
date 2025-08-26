import React from 'react'
const Nav = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between px-4 sm:px-16 py-4 bg-white shadow">
      {/* Logo */}
      <div className="p-1 sm:p-4">
        <img
          src="./Images/logo-long.svg"
          alt="Logo"
          className="h-8 sm:h-8"
        />
      </div>
      
      {/* Buttons */}
      <div className="flex gap-2 mt-4 sm:mt-0">
        <button className="px-8 py-4 bg-white text-black border border-none rounded-full font-bold">
          Sign In
        </button>
        <button className="px-8 py-4 bg-black text-white rounded-full font-bold">
          Sign Up
        </button>
      </div>
    </nav>
  )
}

export default Nav
