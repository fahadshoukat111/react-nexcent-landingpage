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

        <button
          className="inline-flex items-center gap-2 rounded border border-[#4CAF4F] bg-[#4CAF4F] px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="#"
        >
          <span className="text-sm font-medium"> Get a Demo </span>

          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>

      </div>
    </div>
  );
};

export default Demo;
