import React from "react";
import Person from "./Person";

const Persons = ({ personsToShow, handleDeletePerson }) => {
  return (
    <div>
      {personsToShow.map((person) => (
        <Person
          key={person.id}
          person={person.name}
          number={person.number}
          id={person.id}
          handleDeletePerson={handleDeletePerson}
        />
      ))}
    </div>
  );
};

export default Persons;
