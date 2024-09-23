import React from "react";
import FlexboxLayout from "../components/flexbox-layout";
import logo from "../assets/Logo.png";
import Button from "../components/button";

const Navbar = () => {
  return (
    <FlexboxLayout
      direction="row" // Default flex direction
      responsiveClasses="flex-col md:flex-row"
      justifyContent="evenly"
      alignItems="center"
      gap={4}
      className="w-full h-[15vh] m-auto mb-8"
    >
      <img src={logo} alt="logo" />
      <nav className="hidden md:flex gap-4">
        <a href="#home" class="active">
          Home
        </a>
        <a href="#news">Services</a>
        <a href="#contact">Feature</a>
        <a href="#about">Product</a>
        <a href="#about">Testimonial</a>
        <a href="#about">FAQ</a>
      </nav>
      <div className="hidden md:flex gap-8">
        <button className="bg-[#F5F7FA] p-2 w-28 text-[#4CAF4F]">Login</button>
        <Button text="Sign Up" />
      </div>
    </FlexboxLayout>
  );
};

export default Navbar;
