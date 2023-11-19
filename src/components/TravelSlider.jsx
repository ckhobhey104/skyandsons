import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { travelSliderImages as data } from "./../data";

const Container = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* border: 5px solid yellow; */
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  /* background-color: #fff7f7; */
  background-color: #cee7f3d6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
  /* filter: drop-shadow(0px 0px 5px #555) */
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  display: ${(props) => props.show === "slide-hidden" && "none"};
`;

const DescContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0000003b;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center; */
`;

const TopDesc = styled.div`
  width: 60%;
  padding: 10px 20px;
  font-size: 75px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  line-height: 80px;
  margin-left: 25px;
`;
const MiddleDesc = styled.div`
  width: 600px;
  line-height: 40px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  padding: 10px 20px;
  margin-left: 25px;
  /* transform-origin: 50% 50%;
  opacity: 1;
  transform: translate(0px, 0px);
  visibility: visible; */
`;

const IndicatorContainer = styled.span`
  display: flex;
  position: absolute;
  bottom: 1rem;
`;

const Indicator = styled.button`
  background-color: ${(props) =>
    props.activate === "indicator" ? "white" : "gray"};
  height: 0.6rem;
  width: 0.4rem;
  border-radius: 100%;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px #555555d2;
  margin: 0 0.2rem;
  cursor: pointer;
`;

const TravelSlider = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <Container>
      <Arrow direction="left" onClick={prevSlide}>
        <ArrowLeftOutlined />
      </Arrow>
      {data.map((item, idx) => (
        <React.Fragment>
          <DescContainer>
            <TopDesc>We Help People Make Memories</TopDesc>
            <MiddleDesc>
              Sky and Sons Travel and Tours is one of the leading tour operators
              in the country
            </MiddleDesc>
          </DescContainer>
          <Image
            src={item.img}
            alt={item.alt}
            key={idx}
            show={slide === idx ? "slide" : "slide-hidden"}
          />
        </React.Fragment>
      ))}
      <Arrow direction="right" onClick={nextSlide}>
        <ArrowRightOutlined />
      </Arrow>
      <IndicatorContainer>
        {data.map((_, idx) => {
          return (
            <Indicator
              key={idx}
              activate={slide === idx ? "indicator" : "indicator-inactive"}
              onClick={() => setSlide(idx)}
            ></Indicator>
          );
        })}
      </IndicatorContainer>
    </Container>
  );
};

export default TravelSlider;
