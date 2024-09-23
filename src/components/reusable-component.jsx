import React from "react";
import FlexboxLayout from "./flexbox-layout";
import Button from "./button";

const ReusableComponent = ({ image, heading, description }) => {
  return (
    <div className="my-12">
      <FlexboxLayout
        direction="row" // Default flex direction
        responsiveClasses="flex-col md:flex-row gap-8 md:gap-2"
        justifyContent="evenly"
        alignItems="center"
        // gap={2}
        className="w-11/12 m-auto mt-12"
      >
        <div className="w-full md:w-2/5">
          <img src={image} alt="" />
        </div>
        <div className="md:w-2/5">
          <h1 className="text-4xl font-bold mb-4">{heading}</h1>
          <p className="mb-4 text-[#717171]">{description}</p>
          <Button text="Learn More" />
        </div>
      </FlexboxLayout>
    </div>
  );
};

export default ReusableComponent;
