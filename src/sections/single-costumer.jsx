import React from "react";
import { MoveRight } from "lucide-react";
import FlexboxLayout from "../components/flexbox-layout";
import companyOne from "../assets/company-one.png";
import companyTwo from "../assets/company-two.png";
import companyThree from "../assets/company-three.png";
import companyFour from "../assets/company-four.png";
import companyFive from "../assets/company-five.png";
import companySix from "../assets/company-six.png";

const SingleCostumer = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <FlexboxLayout
        direction="row" // Default flex direction
        responsiveClasses="flex-col md:flex-row"
        justifyContent="evenly"
        alignItems="center"
        gap="2"
        className="md:w-11/12 mx-4 md:mx-auto my-12"
      >
        <div className="md:w-[30%]"></div>
        <div className="md:w-[50%] pt-4">
          <p className="text-[#717171]">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h1 className="text-2xl font-bold mt-4 mb-1 text-[#4CAF4F]">
            Tim Smith
          </h1>
          <p>British Dragon Boat Racing Association</p>
          <div className="flex gap-2 my-4">
            <img src={companyOne} />
            <img src={companyTwo} />
            <img src={companyThree} />
            <img src={companyFour} />
            <img src={companyFive} />
            <img src={companySix} />
            <img src={companyOne} />
            <h1 className="text-1xl font-bold self-center text-[#4CAF4F]">
              Meet all customers
            </h1>
            <MoveRight className="self-center ]" color="#4CAF4F"/>
          </div>
        </div>
      </FlexboxLayout>
    </div>
  );
};

export default SingleCostumer;
