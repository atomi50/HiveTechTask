import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetail";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Favorites } from "./pages/Favorites";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path=":moviesId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
