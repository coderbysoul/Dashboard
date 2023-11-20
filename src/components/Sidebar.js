// src/components/Sidebar.js

import React, { useState } from 'react';
import './Sidebar.css'; // You can create this file for styling
const Sidebar = () => {
  const [activeOption, setActiveOption] = useState('Monitoring');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="sidebar">
      <div className="line"></div>
      <div className="logo">
        <span>LOGO HERE</span>
      </div>
      <div className="line"></div>
      <div className="options">
        {['Overview', 'Onboarding', 'Monitoring', 'Flagging', 'Source of Income', 'UAR'].map((option) => (
          <div
            key={option}
            className={`option ${activeOption === option ? 'active' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="user-info">
        <div className="user-image">
          <img src="/images/elon.png" alt="Elon Musk" />
        </div>
        <div className="user-details">
          <div className="user-name">Elon Musk</div>
          <div className="user-email">elon@twitter.com</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
