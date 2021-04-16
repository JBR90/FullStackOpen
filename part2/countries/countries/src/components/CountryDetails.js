import React from "react";
import FilteredCountryList from "./FilteredCountryList";
import Language from "./Language";
import Weather from "./Weather";

const CountryDetails = ({ filteredCountry, weatherData }) => {
  //   console.log(filteredCountry);
  if (filteredCountry.length == 1) {
    // setCity(filteredCountry[0].capital);

    return (
      <div>
        <h2>{filteredCountry[0].name}</h2>
        <p>Capital: {filteredCountry[0].capital}</p>
        <p>Population: {filteredCountry[0].population}</p>
        <h2>Languages:</h2>
        <ul>
          {filteredCountry[0].languages.map((lan) => (
            <Language key={lan.iso639_1} lan={lan.name} />
          ))}
        </ul>
        <img
          style={{ width: "100px" }}
          src={filteredCountry[0].flag}
          alt={filteredCountry.name}
        />

        <h2>Weather in {filteredCountry[0].capital} </h2>
        <Weather weatherData={weatherData} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default CountryDetails;
