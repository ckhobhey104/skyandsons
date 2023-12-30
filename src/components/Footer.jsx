import { HashLink as Link } from "react-router-hash-link";
import {
  Facebook,
  Instagram,
  Pinterest,
  Room,
  Phone,
  MailOutline,
  Twitter,
} from "@material-ui/icons";
import ApartmentIcon from "@material-ui/icons/Apartment";
import styled from "styled-components";
import { mobile } from "../responsive";
// import { member_of_img } from "../data";

const Container = styled.div`
  display: flex;

  ${mobile({
    flexDirection: "column",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
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

const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
    display: "none",
  })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

const ListItem = styled.li`
  width: 50%;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
    backgroundColor: "#fff8f8",
  })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const MemberOf = styled.img`
  width: 25%;
  height: 20%;
`;

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <Left>
        <Logo>S.K.Y. & SON'S</Logo>
        <Desc>Follow us on all social media handles.</Desc>
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
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem onClick={scrollUp}>Home</ListItem>
          <ListItem>
            <StyledLink to="#aboutus" smooth>
              About Us
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="#explore_products" smooth>
              Explore Our Products
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="#whychooseus" smooth>
              Why Choose Us
            </StyledLink>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <ApartmentIcon style={{ marginRight: "10px" }} />
          SKY & SON'S Company LTD{" "}
        </ContactItem>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          West Legon, Police Container
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> 0302 43 6242/ +233 24 348
          3409 / +233 27 663 1998
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          skyandsonslimited@outlook.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
