import React from 'react';
import Search from './DetailListMovie/Search';
import MovieList from './DetailListMovie';
import { Link } from 'react-router-dom';
import ModalDetailMovie from '../../components/Modal/ModalDetailMovie';


export default function MovieManagerment() {
  return (
    <div className="container">
      <Link activeClassName="active" className="nav-link" to="/admin/addmovie">Thêm Phim</Link>
      <Search />
      <MovieList />
      <ModalDetailMovie />
    </div>
  )
}
