import React from 'react';
import Search from './Search';
import MovieList from './MovieList';
import Modal from './Modal';

export default function MovieManagerment() {
  return (
    <div>
      <button
        className="btn btn-success"
        data-toggle="modal"
        data-target="#modelIdUser"
      >
        Thêm Phim
          </button>
      <Search />
      <MovieList />
      <Modal />
    </div>
  )
}
