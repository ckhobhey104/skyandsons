import styled from "styled-components";
import Widget from "./Widget";
import FlightLandOutlinedIcon from "@material-ui/icons/FlightLandOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import ApartmentOutlinedIcon from "@material-ui/icons/ApartmentOutlined";
import LocalAirportIcon from "@material-ui/icons/LocalAirport";

const Wrapper = styled.div`
  background: #edf6fbbc;
  width: 100vw;
  /* color: #333; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 35px;
  padding: 10px 0px 0px 0px;
  text-align: center;
  font-weight: 600;
  cursor: default !important;
`;
const WidgetContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TravelWhyChooseUs = () => {
  return (
    <Wrapper>
      <Container>
        <Title>WHY CHOOSE US</Title>
        <WidgetContainer>
          <Widget
            icon={<FlightLandOutlinedIcon style={{ fontSize: "48px" }} />}
            heading="Diverse Destinations"
            text="We have Undiscovered Places Included in Our List For You To Explore"
            color="3B5999"
          />
          <Widget
            icon={<MonetizationOnOutlinedIcon style={{ fontSize: "48px" }} />}
            heading="Value For Money"
            text="Our Packages Are Pocket Friendly. You can Travel Without Exceeding Your Budget"
            color="91E3C7"
          />
          <Widget
            icon={<ApartmentOutlinedIcon style={{ fontSize: "48px" }} />}
            heading="Beautiful Places"
            text="Explore The Most Beautiful Places With Us"
            color="EFC04F"
          />
          <Widget
            icon={<LocalAirportIcon style={{ fontSize: "48px" }} />}
            heading="Passionate Travel"
            text="Unleash the Wonderlust In You And Travel Care Free With Us"
            color="E4405F"
          />
        </WidgetContainer>
      </Container>
    </Wrapper>
  );
};

export default TravelWhyChooseUs;
