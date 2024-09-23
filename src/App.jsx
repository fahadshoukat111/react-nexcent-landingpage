import { useState } from "react";
import Navbar from "./sections/navbar";
import Banner from "./sections/banner";
import OurClient from "./sections/our-client";
import EntireCommunity from "./sections/entire-community";
import SpendingThree from "./sections/spendingThree";
import DesignLay from "./sections/design-lay";
import LocalBusiness from "./sections/local-business";
import SingleCostumer from "./sections/single-costumer";
import CaringMarketing from "./sections/caring-marketing";
import Demo from "./sections/demo";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="bg-[#F5F7FA]">
        <Navbar />
        <Banner />
      </div>
      <OurClient />
      <EntireCommunity />
      <SpendingThree />
      <LocalBusiness />
      <DesignLay />
      <SingleCostumer />
      <CaringMarketing />
      <Demo />
      <Footer/>
    </>
  );
}

export default App;
