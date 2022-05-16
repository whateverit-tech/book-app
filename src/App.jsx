import { useEffect, useState } from "react";
import { FiBook, FiBookmark } from "react-icons/fi";
import { useSelector } from 'react-redux'
import NavigationMenu from "./components/NavigationMenu";
import Section from "./components/Section";
import Search from "./components/Search";
import Footer from "./components/Footer";
import ButtonNext from "./components/ButtonNext";
import BookGrid from "./components/BookGrid";
import GoogleBookLogo from "./components/GoogleBookLogo";
import Carousel from "./components/Carousel";

function App() {
  const bookmark = useSelector((state) => state.bookmark.value);
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  
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
      <NavigationMenu/>
      <main className="max-w-3xl mx-auto my-5">
        <GoogleBookLogo/>
        <Search/>
        
        <Section title="Books" icon={<FiBook/>} count={books.totalItems} isPage url="#">
          {/* <BookGrid books={books?.items}/> */}
          <Carousel books={books?.items}/>
        </Section>

        <Section title="Favorites" icon={<FiBookmark/>} count={bookmark.length} isPage>
          <BookGrid books={bookmark}/>
        </Section>
        
        {/* <div className="mb-3 flex justify-center">
          <ButtonNext/>
        </div> */}
      </main>

      <Footer/>
    </div>
  );
}

export default App;
