// import HomePage from "../containers/home/HomePage";
import CarouselHome from "../components/CarouselHome";
import Movie from "../components/Movie";
import HomePage from "../containers/home/HomePage";

//Mảng chứa các route
const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
];

export { routesHome };
