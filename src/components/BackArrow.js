import React from "react";
import PropTypes from "prop-types";

const BackArrow = ({ onClick, disabled }) => {
  return (
    <div className="backArrow">
      <button
        disabled={disabled}
        onClick={onClick}
        style={{ backgroundColor: "#2c2c2c", width: "28px", height: "28px" }}
      >
        {!disabled && (
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/74e0f9f6-a57f-46a7-8464-cacca8a29e00.svg"
          />
        )}
      </button>
    </div>
  );
};

export default BackArrow;

BackArrow.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
