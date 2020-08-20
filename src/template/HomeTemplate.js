import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function HomeLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}
export default function HomeTemplate({ Component, ...props }) {
  return (
    <div>
      <Route
        {...props}
        render={propsComponent => (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        )} />
    </div>
  )
}
