import { useState } from "react";

const Table = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortOrder, setSortOrder] = useState({
    riskLevel: "asc",
    inQueueFor: "asc",
    dateAdded: "asc",
  });

  const sortColumn = (columnName) => {
    const order = sortOrder[columnName] === "asc" ? "desc" : "asc";

    const sorted = [...sortedData].sort((a, b) => {
      if (columnName === "riskLevel") {
        return order === "asc"
          ? a[columnName].localeCompare(b[columnName])
          : b[columnName].localeCompare(a[columnName]);
      } else if (columnName === "inQueueFor") {
        const aValue = parseInt(a[columnName]);
        const bValue = parseInt(b[columnName]);
        return order === "asc" ? aValue - bValue : bValue - aValue;
      } else if (columnName === "dateAdded") {
        const aValue = new Date(a[columnName]);
        const bValue = new Date(b[columnName]);
        return order === "asc" ? aValue - bValue : bValue - aValue;
      } else {
        return 0;
      }
    });

    setSortedData(sorted);
    setSortOrder({ ...sortOrder, [columnName]: order });
  };

  const renderTableHeader = () => {
    const headers = Object.keys(data[0]);
    //   user: "John Doe",
    // riskLevel: "Medium",
    // triggerReason: "FIFO",
    // inQueueFor: "4 days",
    // dateAdded: "12 Oct, 2023",
    // previouslyReviewed: "Yes",

    return headers.map((header, index) => {
      let label;
      switch (header) {
        case "user":
          label = "User";
          break;
        case "riskLevel":
          label = "Risk-Level";
          break;
        case "triggerReason":
          label = "Trigger Reason";
          break;
        case "inQueueFor":
          label = "In Queue For";
          break;
        case "dateAdded":
          label = "Date Added on";
          break;
        case "previouslyReviewed":
          label = "Previously reviewed";
          break;
        // Add more cases as needed
        default:
          label = header;
      }

      return (
        // <th key={index} onClick={() => sortColumn(header)}>
        //   {label} {sortOrder[header] === "asc" ? "↑" : "↓"}
        // </th>
        <th key={index}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              margin: "0px 10px",
            }}
          >
            <p>{label}</p>
            {header !== "triggerReason" && header !== "previouslyReviewed" && (
              <div style={{ marginLeft: "10px" }}>
                <i
                  class="fa-solid fa-angle-up"
                  style={{
                    display: "block",
                    color: sortOrder[header] === "asc" ? "black" : "grey",
                  }}
                  onClick={() => {
                    setSortOrder({ ...sortOrder, [header]: "asc" });
                    sortColumn(header);
                  }}
                ></i>
                <i
                  class="fa-solid fa-angle-down"
                  style={{
                    display: "block",
                    color: sortOrder[header] === "desc" ? "black" : "grey",
                  }}
                  onClick={() => {
                    setSortOrder({ ...sortOrder, [header]: "desc" });
                    sortColumn(header);
                  }}
                ></i>
              </div>
            )}
          </div>
        </th>
      );
    });
  };

  const renderTableRows = () => {
    return sortedData.map((item, index) => (
      <tr key={index}>
        {Object.values(item).map((value, index) => {
          // console.log(value);
          // return <td key={index}>{value}</td>;
          if (index === 0) {
            return (
              <td key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ marginRight: "5px" }}>{value}</span>
                  <i
                    class="fa-solid fa-arrow-up-right-from-square"
                    style={{ color: "blue", cursor: "pointer" }}
                  ></i>
                </div>
              </td>
            );
          }
          if (value === "High") {
            return (
              <td key={index} style={{ color: "red" }}>
                <i class="fa-solid fa-circle"></i>
                <span style={{ marginLeft: "5px" }}>{value}</span>
              </td>
            );
          } else if (value === "Medium") {
            return (
              <td key={index} style={{ color: "yellow" }}>
                <i class="fa-solid fa-circle"></i>
                <span style={{ marginLeft: "5px" }}>{value}</span>
              </td>
            );
          } else if (value === "Low") {
            return (
              <td key={index} style={{ color: "green" }}>
                <i class="fa-solid fa-circle"></i>
                <span style={{ marginLeft: "5px" }}>{value}</span>
              </td>
            );
          } else if (value === "Yes") {
            return (
              <td key={index}>
                <p>{value}</p>
                <p>12th Oct, 2023</p>
              </td>
            );
          }
          return <td key={index}>{value}</td>;
        })}
        <div style={{ width: "100%" }}></div>
      </tr>
    ));
  };

  return (
    <table
      cellPadding={0}
      cellSpacing={0}
      style={{
        width: "100%",
        borderCollapse: "seperate",
        borderSpacing: "0 3rem",
      }}
    >
      <thead style={{ backgroundColor: "#F5F5F5" }}>
        <tr>{renderTableHeader()}</tr>
      </thead>
      <tbody>{renderTableRows()}</tbody>
    </table>
  );
};

export default Table;
