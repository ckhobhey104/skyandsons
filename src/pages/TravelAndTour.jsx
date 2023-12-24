import styled from "styled-components";
import Announcement from "../components/Announcement";
import TravelNavbar from "../components/TravelNav";
import TravelSlider from "../components/TravelSlider";
import TravelWhyChooseUs from "../components/TravelWhyChooseUs";
import TravelAboutUs from "../components/TravelAboutUs";
import TravelFooter from "../components/TravelFooter";

const Container = styled.div``;

const TravelAndTour = () => {
  return (
    <Container>
      <Announcement />
      <TravelNavbar />
      <TravelSlider />
      <TravelWhyChooseUs />
      <TravelAboutUs />
      <TravelFooter />
    </Container>
  );
};

export default TravelAndTour;
