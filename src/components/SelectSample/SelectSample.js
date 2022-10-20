import React from "react";
import PropTypes from "prop-types";

function SelectSample(props) {
    return (
      <select {...props}>{props.children}</select>
    )
} 

SelectSample.propTypes = {
  children: PropTypes.node,
}

export default SelectSample