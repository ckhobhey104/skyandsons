import styled from "styled-components";
import Widget from "./Widget";

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
          <Widget />
          <Widget />
          <Widget />
          <Widget />
        </WidgetContainer>
      </Container>
    </Wrapper>
  );
};

export default TravelWhyChooseUs;
