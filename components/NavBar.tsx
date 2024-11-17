import React from "react"
import { Link } from "react-router-dom"

function NavBar() {
  return (
<section className="w-full px-8 text-gray-700">
  <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
    <div className="relative flex flex-col md:flex-row">
      <Link to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
        <span className="mx-auto text-xl font-black leading-none text-gray-100 select-none">Employee App<span className="text-indigo-400">.</span></span>
      </Link>
      <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
        <Link to="/" className="mr-5 font-medium leading-6 text-gray-200 hover:text-gray-900">Home</Link>
        <Link to="/about" className="mr-5 font-medium leading-6 text-gray-200 hover:text-gray-900">About</Link>
        <Link to="/create" className="mr-5 font-medium leading-6 text-gray-200 hover:text-gray-900">Create</Link>
      </nav>
    </div>
    <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
      <Link to="/dashboard" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
        Dashbaord
      </Link>
    </div>
  </div>
</section>

  )
}

export default NavBar
