import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

export const Button = ({ text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={styles.btn}>
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
