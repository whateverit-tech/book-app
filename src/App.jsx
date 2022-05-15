import { useEffect, useState } from "react";
import { FiSearch, FiBook, FiArrowRightCircle } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import logo from "./logo.png";
import FavoritesMenu from "./components/FavoritesMenu";
import BookItem from "./components/BookItem";
import { useSelector } from 'react-redux'

function App() {
  const bookmark = useSelector((state) => state.bookmark.value);
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://www.googleapis.com/books/v1/volumes?q='${search}'`);
      const json = await data.json();
      setBooks(json);
    }

    fetchData().catch(console.error);
  },[search]);

  return (
    <div className="App">
      <nav className="max-w-3xl mx-auto my-2 flex justify-end">
        <FavoritesMenu/>
      </nav>
      
      <main className="max-w-3xl mx-auto my-5">
        <img src={logo} alt="logo" className="object-cover w-[15rem] mx-auto my-14"/>
        <div className="flex gap-4 items-center py-2 px-4 rounded-md border border-gray-300">
          <FiSearch className="text-gray-400" />
          <input type="text" 
          className="w-full focus:outline-none" 
          value={search} 
          onChange={handleSearch}
          placeholder="Search Book..."/>
        </div>
        
        <div className="my-10 grid grid-cols-3 gap-4">
          {books.items && books?.items.map((book, index) => (
            <BookItem book={book} key={index}/>
          ))}
        </div>

        <h5>Favorites</h5>
        <div>
          <div className="my-10 grid grid-cols-3 gap-4">
            {bookmark&& bookmark.map((book, index) => (
              <BookItem book={book} key={'fav-' + index} favorited/>
            ))}
          </div>
        </div>
        
        <div className="mb-3 flex justify-between">
          <div className="flex gap-2 items-center ">
            <span className="text-gray-400 inline-flex gap-1 items-center"><FiBook /> Total Books</span>
            <span className="font-semibold text-blue-500">{books.totalItems}</span>
          </div>
          
          <button className="hover:text-blue-500 font-semibold border border-gray-300 rounded-md px-2 py-1 text-gray-400 inline-flex gap-2 items-center">
            <span>Next</span>
            <FiArrowRightCircle/>
          </button>
        </div>
        
        <hr />

        
      </main>
      <footer className="flex justify-center my-10">
        <div className="text-sm text-gray-500 inline-flex items-center gap-2">
          <span>Made with</span>
          <FaHeart className="text-red-400"/> 
          <span>in</span>
          <span className="text-gray-700">Indonesia</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
