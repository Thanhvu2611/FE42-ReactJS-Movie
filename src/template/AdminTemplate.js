import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './../containers/admin/Dashboard';

function AdminLayout(props) {
  return (
    <div className="row">
      <div className="col-sm-2">
        <Dashboard />
      </div>
      <div className="col-sm-10">
        {props.children}
      </div>
    </div>
  )
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <div>
      <Route
        {...props}
        render={propsComponent => {
          if (localStorage.getItem("userAdmin")) {
            return (
              <AdminLayout>
                <Component {...propsComponent} />
              </AdminLayout>
            );
          }
          return <Redirect to="/auth" />
        }}
      />
    </div>
  )
}
