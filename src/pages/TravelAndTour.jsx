import styled from "styled-components";
import Announcement from "../components/Announcement";
import TravelNav from "../components/TravelNav";
import TravelSlider from "../components/TravelSlider";

const Container = styled.div``;

const TravelAndTour = () => {
  return (
    <Container>
      <Announcement />
      <TravelNav />
      <TravelSlider />
    </Container>
  );
};

export default TravelAndTour;
