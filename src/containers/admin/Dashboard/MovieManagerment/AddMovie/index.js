import React from 'react'

export default function AddMovie() {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>Tên Phim</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Trailer</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="col-6">
            <div className="form-group">
              <label>Đánh Giá</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Hình Ảnh</label>
              <input type="file" className="form-control" />
            </div>

          </div>
          <div className="col-12">
            <div className="form-group">
              <label>Mô Tả</label>
              <textarea className="form-control" rows="5" />
            </div>
          </div>


        </div>
        <div>
          <button type="submit" className="btn btn-success">
            Add
                </button>
          <button type="submit" className="btn btn-info">
            Save
                </button>
        </div>
      </form>
    </div>
  )
}
