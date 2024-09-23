import React from "react";
import FlexboxLayout from "../components/flexbox-layout";

const InfoCards = () => {
  return (
    <div className="w-full my-8">
      <FlexboxLayout
        direction="row" // Default flex direction
        responsiveClasses="flex-col md:flex-row"
        justifyContent="center"
        alignItems="center"
        gap="3"
        flext-wrap="wrap"
        className="w-11/12 m-auto mt-48 wrap"
      >
        <div className="w-full md:w-3/12 bg-[#f5f7fa]">
          <h1 className="p-4 text-center text-xl">
            Creating Streamlined <br /> Safeguarding Processes with <br />
            OneRen
          </h1>
          <h2 className="text-center text-lg font-bold text-[#4CAF4F] mb-2">
            Readmore
          </h2>
        </div>
        <div className="w-full md:w-3/12 bg-[#f5f7fa]">
          <h1 className="p-4 text-center text-xl">
            What are your safeguarding responsibilities and how can you manage
            them?
          </h1>
          <h2 className="text-center text-lg font-bold text-[#4CAF4F] mb-2">
            Readmore
          </h2>
        </div>
        <div className="w-full md:w-3/12 bg-[#f5f7fa]">
          <h1 className="py-4 text-center text-xl">
            Revamping the Membership <br /> Model with Triathlon <br />{" "}
            Australia
          </h1>
          <h2 className="text-center text-lg font-bold text-[#4CAF4F] mb-2">
            Readmore
          </h2>
        </div>
      </FlexboxLayout>
    </div>
  );
};

export default InfoCards;
