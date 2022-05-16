import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import BookPage from "./pages/BookPage";
import PokemonPage from "./pages/PokemonPage";
import FavoritePage from "./pages/FavoritePage";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">

      <Navbar/>

      <main className="max-w-3xl mx-auto my-5">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="pokemons" element={<PokemonPage />} />
          <Route path="books" element={<BookPage />} />
          <Route path="favorites" element={<FavoritePage />} />
        </Routes>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
