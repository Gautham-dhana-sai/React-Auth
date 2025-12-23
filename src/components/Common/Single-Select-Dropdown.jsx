import PropTypes from "prop-types";
import "../../styles/dropdown.css"
import { useState } from "react";


const SingleSelectDropdown = ({ placeholder, display, options, list, selectItem }) => {
  const [check, checkbox] = useState(false)
  
  return (
    <>
      <div className="select-wrapper form-control" onBlur={() => checkbox(false)}>
        <input type="checkbox" id={placeholder} className="select-toggle" defaultChecked={check} onClick={() => checkbox(true)}/>

        <label htmlFor={placeholder} className="select-trigger">
          <span className="selected-value">{display || placeholder}</span>
          <span className="chevron">▾</span>
        </label>

        <ul className="select-menu">
          {list?.length 
            ? list.map((name, index) => <li key={`${name}-${index}`} onClick={() => selectItem(name)}>{name}</li>)
            : options?.length && options.map((option) => <li key={option.state_code} onClick={() => selectItem(option.name)}>{option.name}</li>)}
        </ul>
      </div>
    </>
  );
};

SingleSelectDropdown.propTypes = {
    placeholder: PropTypes.string,
    display: PropTypes.string,
    options: PropTypes.array,
    list: PropTypes.array,
    selectItem: PropTypes.func
}

export default SingleSelectDropdown;
