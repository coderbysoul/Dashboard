// src/components/Dashboard.js

import DataRow from "./DataRow";

import React, { useState, useRef } from "react";
import "./Dashboard.css"; // You can create this file for styling
import Table from "./Table";
import Table2 from "./Table2";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Modal from "./Modal";

const Dashboard = () => {
  const [filter, setFilter] = useState("Pending"); // 'Pending' or 'Completed'
  const [triggerReasonFilter, setTriggerReasonFilter] = useState("All");
  const [riskLevelFilter, setRiskLevelFilter] = useState("All");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleTriggerReasonFilterChange = (newFilter) => {
    setTriggerReasonFilter(newFilter);
  };

  const handleRiskLevelFilterChange = (newFilter) => {
    setRiskLevelFilter(newFilter);
  };

  const pendingDummyData = [
    {
      user: "Sam Altman",
      riskLevel: "Medium",
      triggerReason: "IP Change",
      inQueueFor: "4 days",
      dateAdded: "12 Oct, 2023",
      previouslyReviewed: "Yes",
      
      
    },
    {
      user: "Sameer Choubey",
      riskLevel: "High",
      triggerReason: "FIFO",
      inQueueFor: "4 days",
      dateAdded: "12 Oct, 2023",
      previouslyReviewed: "No",
      
    },
    {
      user: "Adarsh Panikkar",
      riskLevel: "Low",
      triggerReason: "IP Change",
      inQueueFor: "5 days",
      dateAdded: "12 Oct, 2023",
      previouslyReviewed: "No",
     
    },
    {
      user: "Pratik Shetty",
      riskLevel: "High",
      triggerReason: "FIFO",
      inQueueFor: "5 days",
      dateAdded: "12 Oct, 2023",
      previouslyReviewed: "Yes",
      
    },
    {
      user: "Elon Musk",
      riskLevel: "Low",
      triggerReason: "FIFO",
      inQueueFor: "5 days",
      dateAdded: "12 Oct, 2023",
      previouslyReviewed: "Yes",
      
    },
    {
      user: "Trina Kundu",
      riskLevel: "Low",
      triggerReason: "FIFO",
      inQueueFor: "5 days",
      dateAdded: "12 Oct, 2023",
      previouslyReviewed: "Yes",
     
    },
   
  ];
  const completedDummyData = [
    {
      user: "Sam Altman",
      riskLevel: "Medium",
     
      actionReason: "Flagged",
     
      timeToClose: "14 days",
      dateAdded: "12 Oct, 2023",
      actionTakenBy: "Neil",
    },
    {
      user: "Sameer Choubey",
      riskLevel: "High",
      
      
     
      actionReason: "Closed",
     
      timeToClose: "14 days",
      dateAdded: "12 Oct, 2023",
      actionTakenBy: "Pratik",
    },
    {
      user: "Adarsh Panikkar",
      riskLevel: "Low",
      
      
      
      actionReason: "Cleared",
      
      timeToClose: "15 days",
      dateAdded: "12 Oct, 2023",
      actionTakenBy: "Prashanth",
    },
    {
      user: "Pratik Shetty",
      riskLevel: "High",
      
      
     
      actionReason: "SOI requested",
      
      timeToClose: "15 days",
      dateAdded: "12 Oct, 2023",
      actionTakenBy: "Rasleen Kaur",
    },
    {
      user: "Elon Musk",
      riskLevel: "Low",
      
      
     
      actionReason: "Flagged",
      
      timeToClose: "15 days",
      dateAdded: "12 Oct, 2023",
      actionTakenBy: "Pratik Shetty",
    },
    {
      user: "Trina Kundu",
      riskLevel: "Low",

      
      
      actionReason: "Closed",
     
      timeToClose: "15 days",
      dateAdded: "12 Oct, 2023",
      actionTakenBy: "Varun Deshpande",
    },
   
  ];


  const triggerReasonOptions = [
    "All",
    "FIFO",
    "LIFO",
    "Critical Event",
    "Random",
  ];
  const riskLevelOptions = ["All", "Low", "Medium", "High"];
  const [isSelected, setIsSelected] = useState(false);

  const handleOptionSelect = (selectedOption, filterType) => {
    setIsSelected(true);
    if (filterType === "TriggerReason") {
      handleTriggerReasonFilterChange(selectedOption);
    } else if (filterType === "RiskLevel") {
      handleRiskLevelFilterChange(selectedOption);
    }
  };

  const modalDropdownOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [changeClosure, setChangeClousure] = useState("No");
  const [modalEmail, setModalEmail] = useState("");
  const emailRef = useRef();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard">
      <div className="header">
        <h2>MONITORING</h2>
        <div className="filters">
          <div
            className={`filter-option ${filter === "Pending" ? "active" : ""}`}
            onClick={() => handleFilterChange("Pending")}
            style={{
              borderBottom: filter === "Pending" ? "3px solid blue" : undefined,
            }}
          >
            Pending
          </div>
          <div
            className={`filter-option ${
              filter === "Completed" ? "active" : ""
            }`}
            style={{
              borderBottom:
                filter === "Completed" ? "3px solid blue" : undefined,
            }}
            onClick={() => handleFilterChange("Completed")}
          >
            Completed
          </div>
        </div>
        <div className="close-account" onClick={openModal}>
          <div className="circle">
            <div className="icon">✕</div>
          </div>
          <div className="text">Close Account</div>
        </div>
      </div>
      <div className="line"></div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          marginTop: "1rem",
        }}
      >
        <Search />
        <Dropdown
          name="Trigger Reason"
          options={triggerReasonOptions}
          onSelect={(selectedOption) =>
            handleOptionSelect(selectedOption, "TriggerReason")
          }
        />
        <Dropdown
          name="Risk Level"
          options={riskLevelOptions}
          onSelect={(selectedOption) =>
            handleOptionSelect(selectedOption, "RiskLevel")
          }
        />
      </div>
      {filter === "Pending" && (
        // <div className="data">
        //   {pendingDummyData.map((data, index) => (
        //     <DataRow key={index} {...data} />
        //   ))}
        // </div>
        <Table data={pendingDummyData} />
      )}
      {filter === "Completed" && (
        // <div className="data">
        //   {pendingDummyData.map((data, index) => (
        //     <DataRow key={index} {...data} />
        //   ))}
        // </div>
        <Table2 data={completedDummyData} />
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div style={{ textAlign: "left" }}>
          <h3>Close Account</h3>
          <p>Email</p>
          <input
            ref={emailRef}
            type="text"
            value={modalEmail}
            onChange={(e) => setModalEmail(e.target.value)}
            className="input-field"
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: "20px" }}>Want to file the UAR?</p>
            <input
              type="radio"
              value="Yes"
              checked={selectedOption === "Yes"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <span>Yes</span>
            <input
              type="radio"
              value="No"
              checked={selectedOption === "No"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <span>no</span>
          </div>
          <p>Reason</p>
          <Dropdown
            name={"Select Reason"}
            options={modalDropdownOptions}
            onSelect={handleOptionSelect}
          />
          <p>Note</p>
          <textarea
            rows="5"
            style={{ width: "98%", alignSelf: "center" }}
          ></textarea>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <div>
              <input
                type="radio"
                value="ChangeYes"
                checked={changeClosure === "ChangeYes"}
                onChange={(e) => setChangeClousure(e.target.value)}
              />
              <span>Change Closure fee</span>
            </div>
            <div
              className="btn"
              style={{
                backgroundColor:
                  modalEmail.length && selectedOption.length && isSelected
                    ? "blue"
                    : "grey",
              }}
              onClick={() => {
                if (modalEmail.length && selectedOption.length && isSelected) {
                  setIsModalOpen(false);
                }
              }}
            >
              <p>Close Account</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;

// You can continue to add more rows following the same structure
