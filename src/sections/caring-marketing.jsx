import React from "react";
import FlexboxLayout from "../components/flexbox-layout";
import InfoCards from "./info-cards";

const CaringMarketing = () => {
  return (
    <div className="w-full my-8">
      <h1 className="text-center font-bold mb-4 text-4xl">
        Caring is the new marketing
      </h1>
      <p className="text-center text-[#717171]">
        The Nexcent blog is the best place to read about the latest membership
        insights,<br />
         trends and more. See who's joining the community, read about
        how our community <br /> are increasing their membership income and lot's
        more.​
      </p>

      <InfoCards />
    </div>
  );
};

export default CaringMarketing;
