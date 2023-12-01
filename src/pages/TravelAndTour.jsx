import styled from "styled-components";
import Announcement from "../components/Announcement";
import TravelNav from "../components/TravelNav";
import TravelSlider from "../components/TravelSlider";
import TravelWhyChooseUs from "../components/TravelWhyChooseUs";
import TravelAboutUs from "../components/TravelAboutUs";

const Container = styled.div``;

const TravelAndTour = () => {
  return (
    <Container>
      <Announcement />
      <TravelNav />
      <TravelSlider />
      <TravelWhyChooseUs />
      <TravelAboutUs />
    </Container>
  );
};

export default TravelAndTour;
