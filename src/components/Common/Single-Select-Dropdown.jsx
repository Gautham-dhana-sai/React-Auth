import PropTypes from "prop-types";
import "../../styles/dropdown.css"
import { useState } from "react";


const SingleSelectDropdown = ({ placeholder, options }) => {
  const [check, checkbox] = useState(false)
  
  return (
    <>
      <div className="select-wrapper form-control" onBlur={() => checkbox(false)}>
        <input type="checkbox" id={placeholder} className="select-toggle" defaultChecked={check} onClick={() => checkbox(true)}/>

        <label htmlFor={placeholder} className="select-trigger">
          <span className="selected-value">{placeholder}</span>
          <span className="chevron">▾</span>
        </label>

        <ul className="select-menu">
          {options.map((option) => <li key={option}>{option}</li>)}
        </ul>
      </div>
    </>
  );
};

SingleSelectDropdown.propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.array
}

export default SingleSelectDropdown;
