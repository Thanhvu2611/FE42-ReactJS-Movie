import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navadmin from "../containers/admin/components/Navadmin";

function AdminLayout(props) {
  return (
    <div className="row">
      <div className="col-2">
        <h3>Dashboard</h3>
        <Navadmin />
      </div>
      <div className="col-10">
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
          if (localStorage.getItem("userAmin")) {
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
