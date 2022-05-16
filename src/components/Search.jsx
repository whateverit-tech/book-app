import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { useSelector } from 'react-redux';
import _ from 'lodash';

function Search() {
  const books = useSelector(state => state.book.value);

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(_.filter(books.items, { volumeInfo: { title: search } }));
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