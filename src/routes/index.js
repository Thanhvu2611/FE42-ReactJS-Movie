// import HomePage from "../containers/home/HomePage";
import CarouselHome from "../components/CarouselHome";
import Movie from "../components/Movie";
import HomePage from "../containers/home/HomePage";

//ADMIN

import UserManagerment from "../containers/admin/Dashboard/UserManagerment";
import ModalMovieShedule from "../containers/admin/components/Modal/DetailMovieItem";
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
    path: "/admin/moviemanagerment",
    component: MovieManagerment,
  },
  {
    exact: false,
    path: "/admin/usermanagerment",
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
    component: ModalMovieShedule,
  },
];

export { routesHome, routesAdmin };
