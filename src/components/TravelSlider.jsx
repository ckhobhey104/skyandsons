import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { travelSliderImages as data } from "./../data";
import { mobile } from "./../responsive";

const Container = styled.div`
  /* width: 100%; */
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  /* border: 5px solid yellow; */
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  display: ${(props) => props.show === "slide-hidden" && "none"};
  transition: opacity 0.7s ease-in-out;
  animation: ${(props) => (props.show ? fadeIn : "none")} 0.5s ease-in-out;
`;

const DescContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000028;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopDesc = styled.div`
  width: 60%;
  padding: 10px 20px;
  font-size: 75px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  line-height: 80px;
  margin-left: 25px;
  display: ${(props) => props.show === "slide-hidden" && "none"};
  transition: opacity 0.7s ease-in-out;
  animation: ${(props) => (props.show ? fadeIn : "none")} 1s ease-in-out;
  ${mobile({
    fontSize: "40px",
    lineHeight: "45px",
  })}
`;
const MiddleDesc = styled.div`
  width: 600px;
  line-height: 40px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
  padding: 10px 20px;
  margin-left: 25px;
  display: ${(props) => props.show === "slide-hidden" && "none"};
  transition: opacity 0.7s ease-in-out;
  animation: ${(props) => (props.show ? fadeIn : "none")} 1.5s ease-in-out;
  ${mobile({
    fontSize: "15px",
    lineHeight: "20px",
    width: "250px",
  })}
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
        <React.Fragment key={idx}>
          <DescContainer>
            <TopDesc show={slide === idx ? "slide" : "slide-hidden"}>
              {item.main_msg}
            </TopDesc>
            <MiddleDesc show={slide === idx ? "slide" : "slide-hidden"}>
              {item.sub_msg}
            </MiddleDesc>
          </DescContainer>
          <Image
            src={item.img}
            alt={item.alt}
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
