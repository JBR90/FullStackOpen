import React from "react";

const Filter = ({ filterValue, handleSearchTerm }) => {
  return (
    <div>
      Filter shown with:{" "}
      <input value={filterValue} onChange={handleSearchTerm} />
    </div>
  );
};

export default Filter;
