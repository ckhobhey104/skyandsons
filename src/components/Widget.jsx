import styled from "styled-components";
const Wrapper = styled.div`
  flex: 1;
  width: 300px;
  height: 290px;
  /* border: 1px solid red; */
`;
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 10px; */
`;
const TopIcon = styled.div`
  width: 111px;
  height: 111px;
  font-size: 50px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Middle = styled.div`
  /* margin: 0 5px 5px 5px 5px; */
  display: flex;
  flex-direction: column;
  padding: 0 10px 10px 10px;
`;
const MiddleHeading = styled.h3`
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  margin: 14px 14px;
`;
const MiddleContent = styled.p`
  font-size: 18px;
  font-weight: 200;
  text-align: center;
`;

const Widget = ({ icon, heading, text, color }) => {
  return (
    <Wrapper>
      <Top>
        <TopIcon color={color}>{icon}</TopIcon>
      </Top>
      <Middle>
        <MiddleHeading>{heading}</MiddleHeading>
        <MiddleContent>{text}</MiddleContent>
      </Middle>
    </Wrapper>
  );
};

export default Widget;
