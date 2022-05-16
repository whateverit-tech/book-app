import React from 'react';
import { FiSearch } from "react-icons/fi";

function Search() {
  const search = "";
  const handleSearch = () => {
  }

  return (
    <div className="flex gap-4 items-center py-2 px-4 rounded-md border border-gray-300">
      <FiSearch className="text-gray-400" />
      <input type="text" 
        className="w-full focus:outline-none" 
        value={search} 
        onChange={handleSearch}
        placeholder="Search Book..."/>
    </div>
  )
}

export default Search