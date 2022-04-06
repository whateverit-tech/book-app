import { useEffect, useState } from "react";
import { FiSearch, FiBookmark, FiBook, FiArrowRightCircle } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import logo from "./logo.png";

function App() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState({});
  
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  
  const toString = (arr) => {
    if (arr.length > 0) return arr.join(", ");
    return "-";
  }
  
  const handleBookmark = (book) => {
    setFavorites({ ...favorites, [book.id]: 1 } );
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
        <a href="/#" className="font-semibold text-gray-500 text-sm hover:text-blue-500">Favorites</a>
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
        
        <div className="my-10 grid grid-cols-3 gap-4 ">
          {books.items && books?.items.map(book => (
            <div className="relative border-gray-300 border p-2 rounded-lg shadow-sm items-center" key={book.id}>
              <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="thumbnail" className="rounded-md mx-auto mb-2 object-cover h-[180px] w-[128px]"/>
              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="font-semibold line-clamp-3 text-ellipsis">{ book.volumeInfo.title }</h3>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Author</span>
                  <h5 className="line-clamp-3 text-ellipsis text-xs">{ toString(book?.volumeInfo?.authors) }</h5>
                </div>
              </div>
              <button 
                onClick={() => handleBookmark(book)}
                className={"absolute top-2 right-2  rounded-lg p-2 hover:bg-purple-100 hover:text-purple-600 transition duration-300 ease-in-out" + (favorites[book.id] ? " bg-purple-600 text-white" : "bg-gray-50 text-gray-500" )}>
                <FiBookmark/>
              </button>
            </div>
          ))}
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
