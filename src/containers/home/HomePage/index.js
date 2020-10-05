import React from "react";
import Movie from "../../../components/Movie";
import CarouselHome from "../../../components/CarouselHome";
import About from "../../../components/About";
import HomeLichChieu from "../../../components/Home_LichChieu";

export default function HomePage() {
  return (
    <div>
      <CarouselHome />
      <Movie />
      <HomeLichChieu />
      <About />
    </div>
  );
}
