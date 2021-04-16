import React from "react";

const Country = ({ country, handleShowButton, countryObj }) => {
  return (
    <div style={wrapper}>
      <p>{country}</p>
      <button
        data-city={countryObj.name}
        value={country}
        onClick={handleShowButton}
        style={button}
      >
        Show
      </button>
    </div>
  );
};

export default Country;

const wrapper = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "60%",
  padding: "5px",
  color: "#444",
  border: "1px solid #1890ff",
};
const button = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  background: "#1890ff",
  color: "#fff",
  margin: "10px",
  fontSize: "14px",
  cursor: "pointer",
  transition: ".3s background",
  "&:hover": {
    background: "#40a9ff",
  },
};
