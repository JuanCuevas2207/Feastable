import React from "react";
import spinnerStyles from "./MiniSpinner.module.css";

const MiniSpinner = () => {
  return (
    <div className={spinnerStyles.loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MiniSpinner;
