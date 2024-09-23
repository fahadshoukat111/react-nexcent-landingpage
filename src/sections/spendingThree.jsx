import React from "react";
import FlexboxLayout from "../components/flexbox-layout";
import spendingFrame from "../assets/FrameSpending3.png";
import Button from "../components/button";
import ReusableComponent from "../components/reusable-component";
const SpendingThree = () => {
  return (
    <ReusableComponent
      image={spendingFrame}
      heading="The unseen of spending three years at Pixelgrade"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio."
    />
  );
};

export default SpendingThree;
