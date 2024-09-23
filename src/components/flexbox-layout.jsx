import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
const FlexboxLayout = ({
  direction,
  justifyContent,
  alignItems,
  wrap,
  gap,
  children,
  className, // For additional custom Tailwind classes
  responsiveClasses = '',
}) => {
   console.log("responsiveDirection",responsiveClasses)
  const flexClasses = classNames(
    "flex",
    {
      "flex-row": direction === "row",
      "flex-col": direction === "column",
      "justify-start": justifyContent === "start",
      "justify-center": justifyContent === "center",
      "justify-end": justifyContent === "end",
      "justify-between": justifyContent === "between",
      "justify-around": justifyContent === "around",
      "justify-evenly": justifyContent === "evenly",
      "items-start": alignItems === "start",
      "items-center": alignItems === "center",
      "items-end": alignItems === "end",
      "items-stretch": alignItems === "stretch",
      "flex-wrap": wrap,
      "flex-nowrap": !wrap,
    },

    {
      [`gap-${gap}`]: gap,
    },
    responsiveClasses,
    className
  );
  return <div className={flexClasses}>{children}</div>;
};

FlexboxLayout.propTypes = {
  direction: PropTypes.oneOf(["row", "column"]),
  justifyContent: PropTypes.oneOf([
    "start",
    "center",
    "end",
    "between",
    "around",
    "evenly",
  ]),
  alignItems: PropTypes.oneOf(["start", "center", "end", "stretch"]),
  wrap: PropTypes.bool,
  gap: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  responsiveClasses: PropTypes.string,
};

// Default props
FlexboxLayout.defaultProps = {
  direction: "row",
  justifyContent: "start",
  alignItems: "stretch",
  wrap: false,
  gap: 0,
  className: "",
  responsiveClasses:"flex-col"
  
};

export default FlexboxLayout;
