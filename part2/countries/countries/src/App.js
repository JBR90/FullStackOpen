import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import FilteredCountryList from "./components/FilteredCountryList";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      if (searchValue !== "") {
        const filteredCountries = response.data.filter((country) =>
          country.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setCountries(filteredCountries);
      }
    });
  }, [searchValue]);

  useEffect(() => {
    if (countries.length === 1) {
      console.log(countries[0].capital);
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${countries[0].capital}&appid=f5bc8aa1ec441c86efd33124758bf528`
        )
        .then((response) => {
          const weather = response.data;
          setWeatherData(weather);
          console.log(weatherData);
        });
    }
  }, [countries]);

  const handleSearchTerm = (e) => {
    setSearchValue(e.target.value);
  };

  const handleShowButton = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>Fetch countries</h1>
      <p>Find Countries</p>

      <input value={searchValue} onChange={handleSearchTerm} />
      <FilteredCountryList
        filteredCountry={countries}
        handleShowButton={handleShowButton}
      />
      <CountryDetails filteredCountry={countries} weatherData={weatherData} />
    </div>
  );
}

export default App;
