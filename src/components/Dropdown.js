import React, { useState } from "react";
import "./Dropdown.css"; // You can create a separate CSS file for styling

const Dropdown = ({ name, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="dropdown-container">
      <div className="selected-option" onClick={toggleDropdown}>
        {/* {selectedOption} */}
        <p>{name}</p>
        {isOpen ? (
          <i class="fa-solid fa-angle-up" style={{ marginLeft: "10px" }}></i>
        ) : (
          <i class="fa-solid fa-angle-down" style={{ marginLeft: "10px" }}></i>
        )}
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionSelect(option)}
              style={{
                backgroundColor: option === selectedOption ? "#ccc" : undefined,
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
