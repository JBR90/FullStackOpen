import React from "react";
import Country from "./Country";

const FilteredCountryList = ({ filteredCountry, handleShowButton }) => {
  //   console.log(filteredCountry);
  if (filteredCountry.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  } else if (filteredCountry.length !== 1) {
    return (
      <div>
        {filteredCountry.map((country) => (
          //   <p>{country.name}</p>
          <Country
            key={country.name}
            country={country.name}
            handleShowButton={handleShowButton}
            countryObj={country}
          />
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default FilteredCountryList;
