import React from "react";
import FlexboxLayout from "../components/flexbox-layout";
import companyOne from "../assets/company-one.png";
import companyTwo from "../assets/company-two.png";
import companyThree from "../assets/company-three.png";
import companyFour from "../assets/company-four.png";
import companyFive from "../assets/company-five.png";
import companySix from "../assets/company-six.png";

const OurClient = () => {
  return (
    <div className="w-full my-8">
      <h1 className="text-center mb-4 text-4xl font-bold">Our Clients</h1>
      <p className="text-center">
        We have been working with some Fortune 500+ clients
      </p>
      <FlexboxLayout
        direction="row" // Default flex direction
        responsiveClasses="flex-col md:flex-row"
        justifyContent="evenly"
        alignItems="center"
        gap="2"
        className="w-11/12 m-auto mt-12"
      >
        <img src={companyOne} />
        <img src={companyTwo} />
        <img src={companyThree} />
        <img src={companyFour} />
        <img src={companyFive} />
        <img src={companySix} />
        <img src={companyOne} />
      </FlexboxLayout>
    </div>
  );
};

export default OurClient;
