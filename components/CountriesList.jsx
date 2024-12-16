import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer  from "./CountreisListShimmer"

export default function CountriesList({ query }) {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    rowGap: "40px",
    width: "95%",
    marginInline: "auto",
  };
  const [countriesData, setCountriesData] = useState([]);
  
  useEffect(()=> {
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      setTimeout(()=> {setCountriesData(data)})
    }).catch((error)=>{
      console.log(error)
    });
  },[])
  
  return (
    <>
    {countriesData.length === 0 ? ( <CountriesListShimmer />) :(<div className="countries-list" style={containerStyle}>
      {countriesData
        .filter((country) => country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query))
        .map(
          (country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population.toLocaleString("en-IN")}
                region={country.region}
                capital={country.capital?.[0] || "N/A"}
                data={country}
              />
            );
          }
        )}
    </div>)}
    </>
  );
}
