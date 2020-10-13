// import HomePage from "../containers/home/HomePage";
import CarouselHome from "../components/CarouselHome";
import Movie from "../components/Movie";
import HomePage from "../containers/home/HomePage";

//ADMIN

import ListMovieShedule from "../containers/admin/Dashboard/DetailMovieItem";
import AddMovie from "../containers/admin/Dashboard/MovieManagerment/AddMovie";
import MovieManagerment from "../containers/admin/Dashboard/MovieManagerment";
import UserManagerment from "../containers/admin/Dashboard/UserManagerment";
import AddUser from "../containers/admin/Dashboard/UserManagerment/AddUser";
import HomeDetailPhim from "../components/Home_DetailPhim";
//Mảng chứa các route
const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/detailmovie/:id",
    component: HomeDetailPhim,
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
    path: "/admin/addmovie/:id",
    component: AddMovie,
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
  {
    exact: false,
    path: "/admin/adduser/:id",
    component: AddUser,
  },
  {
    exact: false,
    path: "/admin/adduser",
    component: AddUser,
  },
];

export { routesHome, routesAdmin };
