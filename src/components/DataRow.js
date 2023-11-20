// src/components/DataRow.js

import React from 'react';
import './DataRow.css'; // You can create this file for styling

const DataRow = ({ user, riskLevel, triggerReason, inQueueFor, dateAdded, previouslyReviewed }) => {
  return (
    <div className="data-row">
      <div className="heading">
        <div className="column">User</div>
        <div className="column">Risk Level</div>
        <div className="column">Trigger Reason</div>
        <div className="column">In Queue For</div>
        <div className="column">Date Added On</div>
        <div className="column">Previously Reviewed</div>
      </div>
      <div className="values">
        <div className="column">{user}</div>
        <div className={`column risk-level ${riskLevel.toLowerCase()}`}>
          {riskLevel}
        </div>
        <div className="column">{triggerReason}</div>
        <div className="column">{inQueueFor}</div>
        <div className="column">{dateAdded}</div>
        <div className="column">{previouslyReviewed === 'Yes' ? 'Yes' : 'No'}</div>
      </div>
    </div>
  );
};

export default DataRow;
