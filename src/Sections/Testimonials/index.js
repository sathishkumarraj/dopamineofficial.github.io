import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Few good words about us!</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="Dopamine has been an essential part of our artistic journey. I would definitely recommend Dopamine. It has been amazing to have them as a vital partner in our drawing class"
            name="Jagan"
            image="avatar-2"
          />

          <Card
            text="In the realm of artistry, Dopamine has been indispensable to our journey. I wholeheartedly recommend Dopamine. Having them on board has truly enriched our drawing class."
            name="Elakiya"
            image="avatar-1"
          />

          <Card
            text="Dopamine is an integral part of our creative venture. I highly recommend Dopamine for their exceptional support. It's been a fantastic experience having them as a cornerstone of our drawing class."
            name="Sanjay"
            image="avatar-4"
          />

          <Card
            text="Dopamine has been a fundamental asset to our drawing class. I strongly recommend Dopamine for their exceptional services. It's truly wonderful to have them as an essential part of our artistic journey."
            name="Suba"
            image="avatar-3"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
