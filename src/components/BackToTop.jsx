import { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const BacktoTopButton = styled.div`
  width: 30px;
  height: 30px;
  padding: 5px;
  color: white;
  background-color: #000000b1;
  font-size: 50px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  visibility: hidden;
  transition: all 0.2s ease;

  &.active {
    visibility: visible;
    transition: all 0.2s ease;
  }
  &:hover {
    border-radius: 0px;
    background-color: #0297e7;
    transition: all 1s ease;
  }
`;

const BackToTop = () => {
  const [backToTopFixed, setBackToTopFixed] = useState(false);
  const setToBackToTopFixed = () => {
    if (window.scrollY >= 65) {
      setBackToTopFixed(true);
    } else {
      setBackToTopFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", setToBackToTopFixed);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <BacktoTopButton
      title="Back To Top"
      className={backToTopFixed ? "active" : ""}
      onClick={scrollUp}
    >
      <ArrowUpwardIcon />
    </BacktoTopButton>
  );
};

export default BackToTop;
