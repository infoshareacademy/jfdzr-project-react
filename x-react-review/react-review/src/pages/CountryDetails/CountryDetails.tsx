import { Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountryDetails as CountryDetailsType } from "./CountryDetails.types";
import CountryFlag from "./CountryFlag/CountryFlag";

const CountryDetails = () => {
  const { countryName } = useParams();

  const [countryDetails, setCountryDetails] = useState<CountryDetailsType>();

  useEffect(() => {
    fetch(
      `https://restcountries.com/v2/name/${countryName}?fields=name,capital,region,subregion,borders,flag&fullText=true`
    )
      .then((response) => response.json())
      .then((data) => setCountryDetails(data[0]));
  }, [countryName]);

  return countryDetails ? (
    <>
      <CountryFlag flag={countryDetails.flag} name={countryDetails.name} />
      {countryDetails.borders ? (
        countryDetails.borders.map((borderItem) => {
          return <Chip label={borderItem} variant="outlined" />;
        })
      ) : (
        <p>no borders</p>
      )}
    </>
  ) : (
    <h2>no country</h2>
  );
};

export default CountryDetails;
