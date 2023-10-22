import styled from "styled-components";
import Card from "./Card";
import { StarsOutlined } from "@material-ui/icons";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";

const Wrapper = styled.div`
  background: #edf6fbbc;
  /* color: #333; */
`;
const Title = styled.h1`
  font-size: 25px;
  padding: 30px 0px 0px 0px;
  text-align: center;
  font-weight: 600;
  cursor: default !important;
`;

const Container = styled.div`
  padding: 30px;
  display: flex;
  gap: 20px;
`;

const WhyChooseUs = () => {
  return (
    <Wrapper id="whychooseus">
      <Title>WHY CHOOSE US?</Title>
      <Container>
        <Card
          title="Quality Assurance"
          icon={<StarsOutlined />}
          text=" With an aim to attain a reliable position in the market, we are always
          providing superior quality products at the customer’s end. With the
          use of modern machines, we rigidly tested every product on several
          quality stages."
          color="8A2BE2"
        />
        <Card
          title="Our Infrastructure"
          icon={<SettingsIcon />}
          text="We are equipped with a reliable vendor base and vast infrastructure. 
          Our infrastructure is facilitated with sufficient machinery and the latest equipment. 
          Also, we divided the infrastructure into various parts for smooth business operations."
          color="E4405F"
        />
        <Card
          title="Our Team"
          icon={<GroupIcon />}
          color="3B5999"
          text="Our company has 100 permanent employees,
         who are masters in their field.
         We appointed every worker on the basis of their skills and market knowledge.
          Thus, they are able to meet the organization's aim in a possible manner."
        />
      </Container>
    </Wrapper>
  );
};

export default WhyChooseUs;
