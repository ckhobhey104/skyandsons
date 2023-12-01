import styled from "styled-components";
import { cartoon_tree } from "../data";

const Wrapper = styled.div`
  width: 100vw;
  height: 500px;
  background-image: url(${cartoon_tree});
  background-position: center left;
  background-repeat: no-repeat;
  /* opacity: 0.5; */
  position: relative;
  /* transition: background 0.3s, border-radius 0.3s, opacity 0.3s; */
`;

const Container = styled.div`
  background: #b1d1e2bb;
  padding: 20px;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 2;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 20px;
  padding: 5px;
  font-weight: 500;
  cursor: default !important;
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const DescTitle = styled.h1`
  font-size: 40px;
  padding: 5px;
  font-weight: 700;
  margin-top: 20px;
  color: #0a1b2fea;
`;

const DescContent = styled.p``;

const TravelAboutUs = () => {
  return (
    <Wrapper>
      <Container>
        <InfoContainer>
          <Title>About Sky and Sons Travel And Tour</Title>
          <DescContainer>
            <DescTitle>Discover your all the destinations with us!</DescTitle>
            <DescContent>
              Sky & Sons Tours is one stop travel house. Kinetic Tours is not
              just a name, but it’s a commitment. We are a reputed and
              professionally managed company that has been in the business of
              Travel for over years now. We understand planning a trip can be
              tremendously frustrating especially when one doesn’t know where to
              start. We understand the travel needs of all and deliver the best
              through meticulous planning. Kinetic Tours brings together a
              highly trained team of individuals with combined management
              experience. We as a team which has the confidence and the
              expertise to handle the most complex and challenging tasks they
              are faced with. Our rich experience helps us to understand your
              needs and give you a product that suits your requirement. Our
              linkages in the travel domain ensure that we provide our travelers
              and corporate clients with the best deals.
            </DescContent>
          </DescContainer>
        </InfoContainer>
      </Container>
      ;
    </Wrapper>
  );
};

export default TravelAboutUs;