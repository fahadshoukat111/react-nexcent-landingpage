import React from "react";
import FlexboxLayout from "../components/flexbox-layout";
import pana from "../assets/pana.png";
import Button from "../components/button";
import ReusableComponent from "../components/reusable-component";
const DesignLay = () => {
  return (
    <ReusableComponent
      image={pana}
      heading="How to design your site footer like we did"
      description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
    />
  );
};

export default DesignLay;
