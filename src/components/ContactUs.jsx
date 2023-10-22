import styled from "styled-components";

const ContactUs = () => {
  const Wrapper = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
  `;

  const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    padding: 20px;
  `;

  const Container = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  `;

  const EnquiryForm = styled.form`
    display: flex;
    flex-wrap: wrap;
  `;
  const Input = styled.input`
    flex: 1;
    min-width: 30%;
    margin: 20px 15px 0px 15px;
    padding: 10px;
  `;

  const Button = styled.button`
    font-size: 15px;
    width: 40%;
    border: none;
    padding: 15px 20px;
    background: teal;
    color: white;
    cursor: pointer;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  `;

  return (
    <Wrapper id="contactus">
      <Title>SEND ENQUIRY</Title>
      <Container>
        <EnquiryForm>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="mobile no." />
          <Input placeholder="city" />
          <Input placeholder="message" />
          <Button>Send</Button>
        </EnquiryForm>
      </Container>
    </Wrapper>
  );
};

export default ContactUs;
