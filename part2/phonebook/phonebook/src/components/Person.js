import React from "react";

const Person = ({ person, number, id, handleDeletePerson }) => {
  return (
    <p>
      {person} - {number}{" "}
      <button value={id} onClick={handleDeletePerson}>
        Delete
      </button>
    </p>
  );
};

export default Person;
