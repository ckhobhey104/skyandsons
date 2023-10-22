import styled from "styled-components";

// import { StarsIcon } from '@mui/icons-material/Stars';
const Card = (props) => {
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    /* display: flex; */
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  const Wrapper = styled.div`
    flex: 1;
    position: relative;
    width: 350px;
    height: 250px;
    /* background-color: black; */
    &:hover ${Info} {
      opacity: 1;
    }
  `;
  const Container = styled.div`
    /* margin: 5px; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f5fbfd;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  `;
  const Top = styled.div``;
  const TopIcon = styled.div`
    text-align: center;
    font-size: 40px;
    padding-top: 5px;
    margin-bottom: 5px;
    color: #${(props) => props.color};
  `;
  const TopText = styled.h1`
    text-align: center;
    font-weight: 300;
    margin-bottom: 5px;
  `;
  const Middle = styled.div`
    /* margin: 0 5px 5px 5px 5px; */
    font-size: 18px;
    font-weight: 200;
    padding: 0 10px 10px 10px;
  `;
  return (
    <Wrapper>
      <Container>
        <Top>
          <TopIcon color={props.color}>{props.icon}</TopIcon>
          <TopText>{props.title}</TopText>
        </Top>
        <Middle>{props.text}</Middle>
      </Container>
      ;
      <Info />
    </Wrapper>
  );
};

export default Card;
