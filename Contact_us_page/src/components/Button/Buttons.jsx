import React from "react";
import styles from "./Buttons.module.css";

const Buttons = ({ isOutline, text, icon, ...rest }) => {
  return (
    <button {...rest} className={isOutline ? styles.isOutline : styles.top_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Buttons;
