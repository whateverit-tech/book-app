import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import BookPage from "./pages/BookPage";
import PokemonPage from "./pages/PokemonPage";

function App() {
  return (
    <div className="App">
      <NavigationMenu/>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="pokemon" element={<PokemonPage />} />
        <Route path="book" element={<BookPage />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
