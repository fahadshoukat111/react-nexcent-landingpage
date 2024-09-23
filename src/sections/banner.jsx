import React from "react";
import FlexboxLayout from "../components/flexbox-layout";
import bannerImg from "../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="">
      <FlexboxLayout
        direction="row" // Default flex direction
        responsiveClasses="flex-col md:flex-row" // Responsive layout
        justifyContent="evenly"
        alignItems="center"
        gap={6}
        className="w-10/12 m-auto"
      >
        <div className="30%">
          <h1 className="text-7xl">
            Lessons and insights
            <br />
            <span className="text-[#4CAF4F]">from 8 years</span>
          </h1>
        </div>
        <div className="50">
          <img src={bannerImg} alt="" />
        </div>
      </FlexboxLayout>
      <FlexboxLayout
        direction="row" // Default flex direction
        responsiveClasses="flex-row md:flex-row"
        justifyContent="center"
        alignItems="center"
        gap="3"
        className="w-full my-4"
      >
        <div class="w-2 h-2 bg-[#4CAF4F] rounded-full my-3"></div>
        <div class="w-2 h-2 bg-lime-300 rounded-full my-3"></div>
        <div class="w-2 h-2 bg-lime-300 rounded-full my-3"></div>
      </FlexboxLayout>
    </div>
  );
};

export default Banner;
