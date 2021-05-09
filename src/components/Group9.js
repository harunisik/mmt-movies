import React from "react";
import PropTypes from "prop-types";

const Group9 = ({ onClick }) => {
  return (
    <div className="group9" onClick={onClick}>
      <div className="ellipse1" />
      <div className="relativeWrapperOne">
        <div className="rectangle12" />
        <div className="rectangle13" />
      </div>
    </div>
  );
};

export default Group9;

Group9.propTypes = {
  onClick: PropTypes.func,
};
