import React from "react";

const People = ({ person, number }) => {
  console.log(person);
  return (
    <p>
      {person} - {number}
    </p>
  );
};

export default People;
