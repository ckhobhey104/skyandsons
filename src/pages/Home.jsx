import React from "react";

import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "./../components/Navbar";
import Slider from "./../components/Slider";
import AboutUs from "./../components/AboutUs";
import Products from "./../components/Products";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactUs from "../components/ContactUs";
import BackToTop from "../components/BackToTop";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <AboutUs />
      <Categories />
      <Products />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
