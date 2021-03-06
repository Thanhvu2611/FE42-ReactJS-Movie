import axios from "axios";
import { domain, groupID } from "./config/setting";

export class QuanLyPhimServices {
  layDanhSachPhim = () => {
    return axios({
      url: `${domain}/quanLyPhim/laydanhsachphim?manhom=${groupID}`,
      method: "GET",
    });
  };
  layThongTinPhim = (maPhim) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
  };
  layHeThongRap = () => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    });
  };
  layCumRapTheoHeThong = (maHeThongRap) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${groupID}`,
      method: "GET",
    });
  };
  layThongTinCumRapTheoHeThong = (maHeThongRap) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
      method: "GET",
    });
  };
  layThongTinPhongVe = (maLichChieu) => {
    return axios({
      url: `${domain}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    });
  };
  layThongTinPhimTheoTrang = (sotrang, sophantu) => {
    return axios({
      url: `${domain}/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${groupID}&soTrang=${sotrang}&soPhanTuTrenTrang=${sophantu}`,
      method: "GET",
    });
  };
  layLichChieuTheoPhim = (maPhim) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
  };
}

export const qLyPhimService = new QuanLyPhimServices();
