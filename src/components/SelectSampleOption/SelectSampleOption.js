import React from "react";
import PropTypes from "prop-types";

function SelectSampleOption(props) {
    return (
      <option>{props.children}</option>
    )
} 

SelectSampleOption.propTypes = {
  children: PropTypes.string,
}

export default SelectSampleOption