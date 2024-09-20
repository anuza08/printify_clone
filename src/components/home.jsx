import React from "react";
import Navbar from "./navbar";
import LandingPage from "./landingPage";
import Info from "./info";
import Reviews from "./review";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <LandingPage />
        <Info />
        <Reviews />
        <Footer />
      </div>
    </>
  );
};

export default Home;
