import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div
      style={{
        padding: "5px 15px",
        backgroundColor: "white",
        width: "40%",
        textAlign: "left",
        borderRadius: "10px",
        alignItems: "center",
        display: "flex",
        marginRight: "15px",
        borderColor:"black",
        border: "2px solid #ccc",
      }}
    >
      <i class="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search here"
        className="search-input"
        style={{
          border: "none",
          padding: "10px",
          width: "90%",
          
        }}
      />
    </div>
  );
};

export default Search;
