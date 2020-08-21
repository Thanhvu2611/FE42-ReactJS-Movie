import React from 'react'

export default function ModalDetailMovie() {
  return (
    <div>
      <div
        className="modal fade"
        id="modelIdDetailMovie"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thông Tin Lịch Chiếu Phim Của The Flash</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-5">
                    <div className="form-group">
                      <label>Chọn Hệ Thống Rạp</label>
                      <select className="form-control">
                        <option>BHD Star Cineplex</option>
                        <option>cgv</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Chọn Cụm rạp</label>
                      <select className="form-control">
                        <option>cụm 1</option>
                        <option>cụm 2</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Chọn rạp</label>
                      <select className="form-control">
                        <option>rạp 1</option>
                        <option>rạp 2</option>
                      </select>
                    </div>

                  </div>
                  <div className="col-7">
                    <div className="form-group">
                      <label>Chọn ngày giờ chiếu</label>
                      <input type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Chọn Thời lượn phim</label>
                      <input type="time" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Mã nhóm mặc định</label>
                      <input type="text" disabled className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Giá vé</label>
                      <div className="input-group">
                        <input type="number" className="form-control" />
                        <div className="input-group-append">
                          <span className="input-group-text">VNĐ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="submit" className="btn btn-success">
                    Submit
                </button>
                  <button type="submit" className="btn btn-danger">
                    Delete
                </button>
                </div>
              </form>
              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã Lịch Chiếu</th>
                      <th>Hệ Thống</th>
                      <th>Cụm Rạp</th>
                      <th>Ngày Giờ Chiếu</th>
                      <th>Giá</th>
                      <th>Thời Lượng</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
