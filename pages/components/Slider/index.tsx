import Image from "next/image";
import React from "react";
import { Carousel } from "react-bootstrap";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import styles from "./slider.module.scss";
const SliderComponent = () => {
  return (
    <Carousel pause={false} interval={3000} >
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/image/sliderImages/1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/image/sliderImages/2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="/image/sliderImages/3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default SliderComponent;
