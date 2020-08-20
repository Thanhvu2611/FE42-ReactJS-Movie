import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navadmin from "./../components/Navadmin";

function AdminLayout(props) {
  return (
    <div>
      <h3>Dashboard</h3>
      <Navadmin />
      {/* {props.children} */}
    </div>
  )
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => {
        return (
          <AdminLayout>
            <Component {...propsComponent} />
          </AdminLayout>
        )
      }}
    />
  )
}
