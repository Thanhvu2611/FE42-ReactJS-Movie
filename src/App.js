import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import NavBar from "./components/Navbar";
import { routesHome } from "./routes";
import Footer from "./components/Footer";

function App() {
  const showMenusHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Route
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/list-movie" component={ListMoviePage} /> */}
        {showMenusHome(routesHome)}

        {/* Route này phải nằm ở cuối cùng. Vì những Route ở dưới PNF thì sẽ không chạy */}
        <Route path="" component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
