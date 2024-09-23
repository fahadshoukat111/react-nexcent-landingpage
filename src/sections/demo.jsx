import React from "react";
import FlexboxLayout from "../components/flexbox-layout";
import Button from "../components/button";

const Demo = () => {
  return (
    <div className="w-full bg-[#F5F7FA] pt-12 flex flex-col items-center mt-20">
      <h1 className="text-center font-bold mb-8 text-4xl">
        Pellentesque suscipit fringilla <br /> libero eu.{" "}
      </h1>
      <div className="mb-4">
        <Button text="Get A Demo" />
      </div>
    </div>
  );
};

export default Demo;
