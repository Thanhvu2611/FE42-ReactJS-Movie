import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
//import NavBar from "./components/Navbar";
import { routesHome, routesAdmin } from "./routes";
//import Footer from "./components/Footer";
import HomeTemplate from './template/HomeTemplate';
import AdminTemplate from './template/AdminTemplate';

function App() {
  const showMenusHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (

          // key={index}
          // exact={item.exact}
          // path={item.path}
          // component={item.component}
          < HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component}
          />
        );
      });
    }
  };

  const showMenuAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <
          AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component}
        />
      })
    }
  }
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        {/* <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/list-movie" component={ListMoviePage} /> */}
        {showMenusHome(routesHome)}
        {showMenuAdmin(routesAdmin)}


        {/* Route này phải nằm ở cuối cùng. Vì những Route ở dưới PNF thì sẽ không chạy */}
        <Route path="" component={PageNotFound} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
