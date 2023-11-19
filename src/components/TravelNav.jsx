import styled from "styled-components";
import { mobile } from "../responsive";
import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
// import logoTransparent from "../images/skyandsonslogo-bg-transparent.png";
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
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: -10px;
`;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;

//   ${mobile({
//     display: "none",
//   })}
// `;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;

// const Input = styled.input`
//   border: none;

//   ${mobile({
//     width: "50px",
//   })}
// `;

// const Center = styled.div`
//   flex: 1;
// `;

// const Logo = styled.h1`
//   font-weight: bold;
//   text-align: center;

//   ${mobile({
//     fontSize: "24px",
//   })}
// `;
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
    flex: 2,
    justifyContent: "center",
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

// const MenuItem = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-left: 25px;

//   ${mobile({
//     fontSize: "12px",
//     marginLeft: "10px",
//   })}
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: #333;
//   font-weight: bold;

//   &.active {
//     color: white;
//     transition: all 3s ease;
//   }

//   &:hover {
//     text-decoration: underline;
//   }
//
// `;
// const StyledLink = styled.span`
//   text-decoration: none;
//   color: #333;
//   font-weight: bold;

//   &.active {
//     color: white;
//     transition: all 3s ease;
//   }

//   &:hover {
//     text-decoration: underline;
//   }
//
// `;

// const BtnContainer = styled.div`
//   font-size: 15px;
//   cursor: pointer;
//   color: #fff;
//   border: 1px solid #0297e7;
//   padding: 0.5rem 18px;
//   background: #0297e7;
//   border-radius: 2px;
// `;

const Navbar = () => {
  //   const [navBarFixed, setNavBarFixed] = useState(false);
  //   const setToNavFixed = () => {
  //     if (window.scrollY >= 65) {
  //       setNavBarFixed(true);
  //     } else {
  //       setNavBarFixed(false);
  //     }
  //   };
  //   useEffect(() => {
  //     window.addEventListener("scroll", setToNavFixed);
  //   }, []);
  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoImg src={logoOriginal} />
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

export default Navbar;
