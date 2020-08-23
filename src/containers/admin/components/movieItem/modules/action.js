import Axios from "axios";
import { FETCH_LIST_MOVIE } from "./constans";

const actFetchListMovie = () => {
  return dispatch => {
    Axios({
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET"
    })
      .then((result) => {
        console.log(result.data);
        dispatch(
          actListMovie(result.data)
        )
      })
      .catch(err => {
        console.log(err);
      })
  }
}
const actListMovie = (listMovie) => {
  return {
    type: FETCH_LIST_MOVIE,
    data: listMovie
  }
}

export { actFetchListMovie }