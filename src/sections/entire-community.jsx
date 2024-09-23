import React from "react";
import FlexboxLayout from "../components/flexbox-layout";
import memberImg from "../assets/member.png";
import nationalImg from "../assets/national.png";
import clubImg from "../assets/club.png";

const EntireCommunity = () => {
  return (
    <div className="w-full mt-28 mb-12">
      <h1 className="text-center mb-4 text-4xl">
        Manage your entire community
        <br />
        in a single system
      </h1>
      <p className="text-center">Who is Nextcent suitable for?</p>
      <FlexboxLayout
        direction="row" // Default flex direction
        responsiveClasses="flex-col md:flex-row"
        justifyContent="evenly"
        alignItems="center"
        gap="2"
        className="w-11/12 m-auto mt-12"
      >
        <div className="w-full md:w-72">
          <div className="my-4 flex justify-center">
            <img src={memberImg} alt="" />
          </div>
          <h1 className="text-center font-bold my-4 text-3xl">
            Membership Organisations
          </h1>
          <p className="my-4 text-center text-[#717171]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="w-full md:w-72">
          <div className="my-4 flex justify-center">
            <img src={nationalImg} alt="" />
          </div>
          <h1 className="text-center font-bold my-4 text-3xl">
            National Associations
          </h1>
          <p className="my-4 text-center text-[#717171]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className="w-full md:w-72">
          <div className="my-4 flex justify-center">
            <img src={clubImg} alt="" />
          </div>
          <h1 className="text-center font-bold my-4 text-3xl">
            Clubs And
            <br />
            Groups
          </h1>
          <p className="my-4 text-center text-[#717171]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </FlexboxLayout>
    </div>
  );
};

export default EntireCommunity;
