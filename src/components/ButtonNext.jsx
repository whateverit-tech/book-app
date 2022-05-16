import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";

function ButtonNext() {
  return (
    <button className="hover:text-blue-500 font-semibold border border-gray-300 rounded-md px-2 py-1 text-gray-400 inline-flex gap-2 items-center">
        <span>Next</span>
        <FiArrowRightCircle/>
    </button>
  )
}

export default ButtonNext