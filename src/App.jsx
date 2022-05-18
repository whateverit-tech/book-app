import { useEffect } from "react";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Homepage from "./pages/Homepage";
import BookPage from "./pages/BookPage";
import PokemonPage from "./pages/PokemonPage";
import FavoritePage from "./pages/FavoritePage";
import { getBooks } from "./slice/book";

import Navbar from "./components/Navbar";
import TodoPage from "./pages/TodoPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar/>

      <main className="max-w-3xl mx-auto my-5">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="pokemons" element={<PokemonPage />} />
          <Route path="books" element={<BookPage />} />
          <Route path="favorites" element={<FavoritePage />} />
          <Route path="todo" element={<TodoPage />} />
        </Routes>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
