import React from "react";
import Header from "../pages/home/Header";
import Banner from "../pages/home/Banner";  
import About from "../pages/home/About";
import Products from "../pages/home/Products";
import Services from "../pages/home/Services";
import Industries from "../pages/home/Industries";
import Contactus from "../pages/home/Contactus";
import Footer from "../pages/home/Footer";

const Home: React.FC = () => {
  return (
    <div>
      {/* <Header /> */}
      <Banner />
      <About />
      <Services />  
      <Industries />
      <Products />
      <Contactus />
      <Footer />
    </div>
  );
};

export default Home;