import styled from "styled-components";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Navbar from "./../components/Navbar";
import ContactUs from "./../components/ContactUs";
import Footer from "./../components/Footer";
// import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

// const FilterContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const Filter = styled.div`
//   margin: 20px;

//   ${mobile({
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   })}
// `;

// const FilterText = styled.span`
//   font-size: 20px;
//   font-weight: 600;
//   margin-right: 20px;
// `;

// const Select = styled.select`
//   padding: 10px;
//   margin-right: 20px;
// `;

// const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Products</Title>
      {/* <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select defaultValue={"DEFAULT"}>
            <Option disabled value="DEFAULT">
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select defaultValue={"DEFAULT"}>
            <Option disabled value="DEFAULT">
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select defaultValue={"DEFAULT"}>
            <Option value="DEFAULT">Newest</Option>
            <Option>Price (asc) </Option>
            <Option>Price (desc) </Option>
          </Select>
        </Filter>
      </FilterContainer> */}
      <Products />
      <ContactUs />
      <Footer />
    </Container>
  );
};

export default ProductList;
