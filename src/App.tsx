import { Routes, Route } from "react-router";
import HomePage from "@/pages/home";
import TvHome from "@/pages/tv";
import MovieHome from "@/pages/movies";
import MovieLayout from "@/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MovieHome />} />
        <Route path="series" element={<TvHome />} />
      </Route>
    </Routes>
  );
};

export default App;
