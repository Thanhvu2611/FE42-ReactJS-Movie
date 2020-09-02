import React from "react";
import Search from "./DetailListMovie/search";
import MovieList from "./DetailListMovie";
import { Link } from "react-router-dom";

export default function MovieManagerment() {
  return (
    <div>
      <Link to="/admin/addmovie">Thêm Phim</Link>
      <Search />
      <MovieList />
    </div>
  );
}