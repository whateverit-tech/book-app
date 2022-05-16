import { useEffect } from "react";
import { FiBook, FiBookmark } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux'
import NavigationMenu from "./components/NavigationMenu";
import Section from "./components/Section";
import Search from "./components/Search";
import Footer from "./components/Footer";
import BookGrid from "./components/BookGrid";
import GoogleBookLogo from "./components/GoogleBookLogo";
import Carousel from "./components/Carousel";
import { getBooks } from "./slice/book";


function App() {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.book.value);
  const {favoriteId, favoriteList} = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="App">
      <NavigationMenu/>

      <main className="max-w-3xl mx-auto my-5">
        <GoogleBookLogo/>
        <Search/>
        
        <Section title="Books" icon={<FiBook/>} count={books.totalItems} isPage url="#">
          <Carousel books={books?.items}/>
        </Section>

        <Section title="Favorites" icon={<FiBookmark/>} count={favoriteId.length} isPage>
          <BookGrid books={favoriteList}/>
        </Section>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
