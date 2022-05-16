import React from 'react'
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex justify-center my-10">
    <div className="text-sm text-gray-500 inline-flex items-center gap-2">
        <span>Made with</span>
        <FaHeart className="text-red-400"/> 
        <span>in</span>
        <span className="text-gray-700">Indonesia</span>
    </div>
    </footer>
  )
}

export default Footer