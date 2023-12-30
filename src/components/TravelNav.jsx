import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
import logoOriginal from "../images/skyandsonslogo.jpg";

const Container = styled.div`
  height: 60px;
  background-color: #f5fafd;
  transition: all 2s ease;
  &.active {
    position: fixed;
    top: 0;
    width: 100%;
    background: #0297e7cd;
    z-index: 50;
    transition: all 2s ease;
  }

  ${mobile({
    height: "50px",
  })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    height: "10px 0px",
    padding: "5px 5px",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: -10px;
`;

const LogoImg = styled.img`
  height: 40px;
  width: 200px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({
    // flex: 2,
    // justifyContent: "center",
    // marginRight: "0px",
    display: "none",
  })}
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const TravelNavbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            {" "}
            <LogoImg src={logoOriginal} />
          </Link>
        </Left>
        <Right>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default TravelNavbar;
