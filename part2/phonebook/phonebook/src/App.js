import React, { useState, useEffect } from "react";
// import People from "./components/People";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";

import personService from "./services/people";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [message, setMessage] = useState(null);

  // useEffect to get people from server
  useEffect(() => {
    personService.getAll().then((initalPeople) => {
      setPersons(initalPeople);
    });
  }, []);

  console.log("render", persons.length, "people");

  const personsToShow =
    showAll === true
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filterValue.toLowerCase())
        );

  const displayMessage = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const addName = (e) => {
    e.preventDefault();

    const nameObject = {
      name: newName,
      number: newNumber,
    };
    const p = persons.find((o) => o.name === newName);

    if (p) {
      alert("Name already in phonebook");
      if (window.confirm("Do you want to update the phonenumber?")) {
        const changedPerson = { ...p, number: newNumber };
        displayMessage(
          `the person ${nameObject.name} number has been changed to ${nameObject.number} `
        );

        personService
          .update(p.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== returnedPerson.id ? person : returnedPerson
              )
            );
          })
          .catch((error) => {
            displayMessage(
              `the person ${changedPerson.name} was already deleted from the server `
            );
            setPersons(persons.filter((p) => p.id !== changedPerson.id));
          });
      }
    } else {
      personService
        .create(nameObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
          displayMessage(`the person ${nameObject.name} has been added  `);
        })
        .catch((error) => {
          console.log(error.response.data.error);
          displayMessage(`${error.response.data.error}`);
        });
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearchTerm = (e) => {
    setFilterValue(e.target.value);
    if (e.target.value.length > 0) {
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  };

  const handleDeleteButon = (e) => {
    if (window.confirm(`Are you sure you want to delete ?`)) {
      personService.deletePerson(e.target.value);
      console.log(persons);
      setPersons(persons.filter((person) => person.id !== e.target.value));
      console.log(persons);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification errorMessage={errorMessage} message={message} />
      <Filter filterValue={filterValue} handleSearchTerm={handleSearchTerm} />

      <h2>Add a new</h2>

      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        personsToShow={personsToShow}
        handleDeletePerson={handleDeleteButon}
      />
    </div>
  );
};

export default App;
