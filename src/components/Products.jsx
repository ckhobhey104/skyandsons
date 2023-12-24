import { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { popularProducts } from "./../data";
import Product from "./Product";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  background: #f5fafd;
  /* background: white; */
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #cee7f3ce;
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
  opacity: 0.5;
  z-index: 200;
  ${mobile({
    display: "none",
  })}
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  overflow: hidden;
  ${mobile({
    overflow: "visible",
  })}
`;

const SlideWrapper = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  transition: all 0.5s ease;
  transform: translateX(
    ${(props) => props.slideIndex * -(props.length * 15)}vw
  );
  ${mobile({
    display: "block",
  })}
`;
const Title = styled.h1`
  font-size: 25px;
  padding: 30px 0px 0px 0px;
  text-align: center;
  font-weight: 600;
  cursor: default !important;
`;

const Products = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = slideIndex === 0;
    const newIndex = isFirstSlide ? popularProducts.length : slideIndex - 1;
    setSlideIndex(newIndex);
    console.log("Previous", slideIndex);
  };

  const goToNext = () => {
    const isLastSlide = slideIndex === popularProducts.length;
    const newIndex = isLastSlide ? 0 : slideIndex + 1;
    setSlideIndex(newIndex);
    console.log("Next", slideIndex);
  };
  const handleClick = (direction) => {
    if (direction === "left") {
      goToPrevious();
    } else {
      goToNext();
    }
  };

  return (
    <Wrapper>
      <Title>VIEW SOME OF THE PRODUCTS WE EXPORT</Title>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <SlideWrapper
          slideIndex={slideIndex / popularProducts.length}
          length={popularProducts.length}
        >
          {popularProducts.map((products) => (
            <Product key={products.id} item={products} />
          ))}
        </SlideWrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </Wrapper>
  );
};

export default Products;
