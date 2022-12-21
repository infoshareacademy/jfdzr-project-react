import { useState, useEffect } from "react";
import { Country } from "./CountriesList.types";
import CountriesListItem from "./CountriesListItem/CountryListItem";

const CountriesList = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v2/all?fields=name,capital,flag,population,regions"
    )
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <>
      {countries.map((country) => {
        return (
          <CountriesListItem
            key={country.name}
            flag={country.flag}
            name={country.name}
          />
        );
      })}
    </>
  );
};

export default CountriesList;
