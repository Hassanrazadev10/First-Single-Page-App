import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/app-store-ios.png" alt="app-store-ios"  fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-15 h-15 text-white p-2 rounded-full" viewBox="0 0 24 24"/>
      <span class="ml-3 text-xl">First-Single-Page-App</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/"  class="mr-5 hover:text-gray-900">Home</Link>
      <Link to="/about" class="mr-5 hover:text-gray-900">About</Link>
      <Link to="/services" class="mr-5 hover:text-gray-900">Services</Link>
      <Link to="/contact" class="mr-5 hover:text-gray-900">ContactUs</Link>
    </nav>
    <button class="inline-flex items-center bg-blue-400 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0">Log in
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>cls
    
  </div>
</header>
    </div>
  )
}

export default Navbar
