import React from "react";
import CarouselComponent from "../../components/Carousel/CarouselComponent";
import CarouselSearchByType from "../../components/Carousel/CarouselSearchByType";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <CarouselSearchByType />
      <CarouselComponent />
    </>
  );
}
