import PropTypes from "prop-types";
import "../../styles/dropdown.css"
import { useEffect, useRef, useState } from "react";


const SingleSelectDropdown = ({ placeholder, display, options, list, selectItem }) => {
  const dropdownRef = useRef(null)
  const [check, checkbox] = useState(false)

  useEffect(() => {
    const handleBlur = (e) => {
      if (
        check && dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        checkbox(false)
      }
    }

    document.addEventListener("mousedown", handleBlur)
    return () => document.removeEventListener("mousedown", handleBlur)
  }, [check])
  
  return (
    <>
      <div ref={dropdownRef} className="select-wrapper form-control">
        <input type="checkbox" id={placeholder} className="select-toggle" checked={check} readOnly onClick={() => checkbox(true)}/>

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
