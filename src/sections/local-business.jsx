import React from "react";
import FlexboxLayout from "../components/flexbox-layout";
import peoplImg from "../assets/people.png";
import cImg from "../assets/c.png";
import pointImg from "../assets/point.png";
import paymentImg from "../assets/payment.png";

const LocalBusiness = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <FlexboxLayout
        direction="row" // Default flex direction
        responsiveClasses="flex-col md:flex-row"
        justifyContent="evenly"
        alignItems="center"
        gap="2"
        className="w-11/12 m-auto mt-12"
      >
        <div className="md:w-2/5">
          <h1 className="text-4xl font-bold pt-8">
            Helping a
            <br />
            <span className="text-[#4CAF4F]">
              local business reinvent itself
            </span>
          </h1>
          <p className="text-[#717171]">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="md:w-2/5">
          <div className="flex gap-12 flex-wrap">
            <div className="mt-12 gap-3  flex justify-center">
              <img src={peoplImg} alt="" />
              <div>
                <h1 className="text-center font-bold text-3xl">2,245,341</h1>
                <p className="text-[#717171]">Members</p>
              </div>
            </div>
            <div className="mt-12 gap-3  flex justify-center">
              <img src={cImg} alt="" />
              <div>
                <h1 className="text-center font-bold text-3xl">46,328</h1>
                <p className="text-[#717171]">Clubs</p>
              </div>
            </div>
            <div className="mb-4 gap-3  flex justify-center">
              <img src={pointImg} alt="" />
              <div>
                <h1 className="text-center font-bold text-3xl">828,867</h1>
                <p className="text-[#717171]">Event Bookings</p>
              </div>
            </div>
            <div className="mb-4 gap-3  flex justify-center">
              <img src={paymentImg} alt="" />
              <div>
                <h1 className="text-center font-bold text-3xl">1,926,436</h1>
                <p className="text-[#717171]">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </FlexboxLayout>
    </div>
  );
};

export default LocalBusiness;
