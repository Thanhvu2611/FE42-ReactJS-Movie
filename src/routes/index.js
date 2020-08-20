// import HomePage from "../containers/home/HomePage";
import CarouselHome from "../components/CarouselHome";
import Movie from "../components/Movie";
import HomePage from "../containers/home/HomePage";

//ADMIN
import Dashboard from "./../containers/admin/Dashboard";

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
    path: "/dashboard",
    component: Dashboard
  }
]

export { routesHome, routesAdmin };
