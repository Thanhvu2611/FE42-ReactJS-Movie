import React, { useEffect } from 'react';
import { connect } from "react-redux";
import UserItem from "../../../components/userItem";
import { actFetchUser, actSearchUserRequest } from "./module/action";
import Loading from '../../../../../components/Loading';

function ListUser(props) {
  useEffect(() => {
    props.fetchUser();
    // eslint-disable-next-line
    //console.log(props);
  }, []);
  let { user, loading, keyword } = props;
  const renderUser = () => {
    // if(keyword &&keyword.length>0){
    //   return user.filter((item))
    // }

    if (user && user.length > 0) {
      return user.map((user, index) => {
        return <UserItem key={user.taiKhoan} user={user} index={index} />
      });
    }
  };

  if (loading) return <Loading />

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tài Khoản</th>
            <th>Mật Khẩu</th>
            <th>Họ Tên</th>
            <th>Email</th>
            <th>Số Điện Thoại</th>
            <th>Thao Tác</th>
          </tr>
        </thead>
        <tbody>{renderUser()}</tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    loading: state.userReducer.loading,
    keyword: state.userReducer.keyword,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => {
      dispatch(actFetchUser());
    },
    searchUser: (user) => {
      dispatch(actSearchUserRequest(user));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListUser)
