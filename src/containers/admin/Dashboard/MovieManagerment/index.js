import React from 'react';
import Search from './DetailListMovie/Search';
import MovieList from './DetailListMovie';
import { Link } from 'react-router-dom';
import ModalMovieShedule from '../../components/Modal/DetailMovieItem';


export default function MovieManagerment() {
  return (
    <div className="container">
      <Link className="nav-link" to="/admin/addmovie">Thêm Phim</Link>
      <Search />
      <MovieList />
      <ModalMovieShedule />
    </div>
  )
}
