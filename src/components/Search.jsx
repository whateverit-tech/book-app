import React from 'react';
import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <>
      <div className="flex gap-4 items-center py-2 px-4 rounded-md border border-gray-300">
        <FiSearch className="text-gray-400"/>
        <input type="text" className="w-full focus:outline-none"/>
      </div>
    </>
  )
}

export default Search