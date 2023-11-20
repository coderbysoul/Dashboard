import React, { useState } from 'react';
import './FilterButton.css'; // Import your external stylesheet

const FilterButton = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Triggered Reason');

  const options = [
    'Hard Flag',
    'Temp Flag',
    'Restricted Unflag',
    'Unflag',
    'Reviewed'
  ];

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(`Triggered Reason: ${option}`);
    setIsActive(false);
  };

  return (
    <div className="filter-container">
      <button className="filter-button" onClick={toggleDropdown}>
        {selectedOption}
      </button>
      {isActive && (
        <div className="filter-dropdown">
          {options.map((option, index) => (
            <div key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterButton;
