import React from "react";
import PropTypes from "prop-types";

const ForwardArrow = ({ onClick, disabled }) => {
  return (
    <div className="forwardArrow">
      <button
        disabled={disabled}
        onClick={onClick}
        style={{ backgroundColor: "#2c2c2c", width: "28px", height: "28px" }}
      >
        {!disabled && (
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/dcbddb88-1a8c-4607-b8f8-38d36a26d100.svg"
          />
        )}
      </button>
    </div>
  );
};

export default ForwardArrow;

ForwardArrow.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
