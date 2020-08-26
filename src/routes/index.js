// import HomePage from "../containers/home/HomePage";
import CarouselHome from "../components/CarouselHome";
import Movie from "../components/Movie";
import HomePage from "../containers/home/HomePage";

//ADMIN
import MovieList from "../containers/admin/components/movieItem"

import UserManagerment from "../containers/admin/Dashboard/UserManagerment";
import ListMovieShedule from "../containers/admin/Dashboard/DetailMovieItem";
import MovieManagerment from "../containers/admin/Dashboard/MovieManagerment";
//import Dashboard from "../containers/admin/Dashboard";
import AddMovie from "../containers/admin/Dashboard/MovieManagerment/AddMovie";

//Mảng chứa các route
const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/admin/movie",
    component: MovieManagerment,
  },
  {
    exact: false,
    path: "/admin/user",
    component: UserManagerment,
  },
  {
    exact: false,
    path: "/admin/addmovie",
    component: AddMovie,
  },
  {
    exact: false,
    path: "/admin/detail/:id",
    component: ListMovieShedule,
  },
];

export { routesHome, routesAdmin };
