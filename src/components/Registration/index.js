import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { actSignUpAPI } from "./modules/action";

import Loading  from "../Loading/index";

function SignUp({ signUpAPI, infoSignUpError, signUpLoading }) {
  const [state, setState] = useState({
    values: {
      hoTen: "",
      soDT: "",
      email: "",
      taiKhoan: "",
      matKhau: "",
      maNhom: "GP09",
      maLoaiNguoiDung: "KhachHang",
    },
    errors: {
      hoTen: "",
      soDT: "",
      email: "",
      taiKhoan: "",
      matKhau: "",
    },
    validations: {
      hoTen: false,
      soDT: false,
      email: false,
      taiKhoan: false,
      matKhau: false,
    },
  });

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    let { hoTen, soDT, email, taiKhoan, matKhau } = state.validations;
    setFormValid(hoTen && soDT && email && taiKhoan && matKhau);
  }, [state]);

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      values: {
        ...state.values,
        [name]: value,
      },
    });
  };

  const handleErrors = (e) => {
    let { placeholder, name, value } = e.target;

    // Check rỗng
    let mess = value === "" ? placeholder + " không được để trống" : "";

    // Check từng ô input khi đã nhập
    switch (name) {
      case "hoTen":
        let stringPattern =
          "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
          "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
          "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        mess =
          value && !value.match(stringPattern)
            ? placeholder + " không được chứa số"
            : mess;
        break;

      case "soDT":
        let phonePattern = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        mess =
          value && !value.match(phonePattern)
            ? placeholder + " không hợp lệ. Ví dụ mẫu hợp lệ: 0312345678"
            : mess;
        break;

      case "email":
        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // eslint-disable-line
        mess =
          value && !value.match(emailPattern)
            ? placeholder + " không hợp lệ"
            : mess;
        break;

      case "taiKhoan":
        break;

      case "matKhau":
        mess =
          value && value.length < 8 ? placeholder + " phải từ 8 ký tự" : mess;
        break;

      default:
        break;
    }

    let valid = mess ? false : true;
    setState({
      ...state,
      errors: {
        ...state.errors,
        [name]: mess,
      },
      validations: {
        ...state.validations,
        [name]: valid,
      },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    signUpAPI(state.values);
  };

  const renderError = (name) => {
    if (state.errors[name]) {
      return <div className="alert alert-danger">{state.errors[name]}</div>;
    }

    return "";
  };

  const renderErrorAPI = () => {
    if (infoSignUpError) {
      if (infoSignUpError.response) {
        return (
          <div className="alert alert-warning">
            {infoSignUpError.response.data}
          </div>
        );
      }

      return (
        <div className="alert alert-warning">{infoSignUpError.message}</div>
      );
    }

    return "";
  };

  return (
    <div className='container login_page'>
         <div className="row">
          <div className="col-sm-6 mx-auto">
              <h1>ĐĂNG KÝ</h1>
 <div className="auth__bottom mt-3">
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Họ tên"
              name="hoTen"
              onChange={handleOnChange}
              onBlur={handleErrors}
              onKeyUp={handleErrors}
            />
            {renderError("hoTen")}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Số điện thoại"
              name="soDT"
              onChange={handleOnChange}
              onBlur={handleErrors}
              onKeyUp={handleErrors}
            />
            {renderError("soDT")}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={handleOnChange}
              onBlur={handleErrors}
              onKeyUp={handleErrors}
            />
            {renderError("email")}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Tên tài khoản"
              name="taiKhoan"
              onChange={handleOnChange}
              onBlur={handleErrors}
              onKeyUp={handleErrors}
            />
            {renderError("taiKhoan")}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Mật khẩu"
              name="matKhau"
              onChange={handleOnChange}
              onBlur={handleErrors}
              onKeyUp={handleErrors}
            />
            {renderError("matKhau")}
          </div>
          {renderErrorAPI()}
          <div className="d-flex">
            <button
              type="submit"
              className="btn btn-success"
              disabled={!formValid}
            >
              {signUpLoading ? <Loading /> : <span>Đăng ký</span>}
            </button>
          </div>
        </form>
      </div>


              </div>
              </div>
     
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    infoSignUpError: state.signUpReducer.infoSignUpError,
    signUpLoading: state.signUpReducer.signUpLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpAPI: (user) => {
      dispatch(actSignUpAPI(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
