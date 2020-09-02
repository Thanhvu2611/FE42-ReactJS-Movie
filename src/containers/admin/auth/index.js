import React, { Component } from 'react';
import { actFetchLogin } from "./modules/actions";
import { connect } from "react-redux";
import Loading from "./../../../components/Loading";


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleOnchange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    const user = {
      taiKhoan: this.state.username,
      matkhau: this.state.password
    }
    this.props.fetchLogin(user, this.props.history);
  };

  renderNoti = () => {
    const { errUser } = this.props;
    if (errUser) {
      return <div className="alert alert-danger">{errUser.response.data}</div>
    }
  }


  render() {
    // console.log(this.props);
    const { loading } = this.props;
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            {this.renderNoti()}
            <form onSubmit={this.handleLogin}>
              <div className="form-group">
                <label>UserName</label>
                <input type="text" className="form-control" name='username' onChange={this.handleOnchange} value={this.state.username} />
              </div>
              <div className="form-group">
                <label>PassWord</label>
                <input type="text" className="form-control" name='password' onChange={this.handleOnchange} value={this.state.password} />
              </div>
              <button type="submit" className="btn btn-success">Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.authReducer.loading,
    errUser: state.authReducer.err
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLogin: (user, history) => {
      dispatch(actFetchLogin(user, history));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth)