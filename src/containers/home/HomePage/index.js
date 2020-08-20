import React from "react";
import Movie from "../../../components/Movie";
import CarouselHome from "../../../components/CarouselHome";
import About from "../../../components/About";

export default function HomePage() {
  return (
    <div>
      <CarouselHome />
      <Movie />
      <About />
    </div>
  );
}
