import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import MovieDetails from "./pages/MovieDetail";
import Home from "./pages/Home";

function App() {
  let { moviesId } = useParams();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":moviesId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
