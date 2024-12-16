import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import styled from "styled-components";
import CountryDetailsShimmer from "./CountryDetailsShimmer";
import { useTheme } from "../hooks/useTheme";

const StyledMain = styled.main`
  & .country-details-container {
    width: 100%;
    padding: 35px 35px 0 35px;
    min-height: calc(100vh - 111.6px);
  }
  & .back-button {
    padding: 6px 24px;
    box-shadow: 0 0 4px 0px rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    cursor: pointer;
  }
  & .country-details {
    display: flex;
    justify-content: space-between;
    margin-top: 64px;
  }
  & .country-details img {
    width: 50%;
    border: 1px solid var(--grey);
  }
  & .details-text {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    column-gap: 64px;
    max-height: max-content;
    flex-wrap: wrap;
    font-size: 18px;
    color: var(--grey);
  }

  & .border-countries {
    margin-top: 48px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 8px;
  }

  & .border-countries b {
    margin-right: 5px;
  }

  & .border-countries a {
    padding: 4px 16px;
    box-shadow: 0 0 4px 0px rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    font-size: 14px;
    color: var(--grey);
    text-decoration: none;
    margin-bottom: 8px;
    margin-right: 8px;
  }

  & h1 {
    margin-bottom: 25px;
  }

  & .details-text-container {
    width: 40%;
  }

  @media (max-width: 749px) {
    .country-details {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 32px;
      gap: 16px;
    }

    .details-text {
      max-height: unset;
      width: max-content;
      font-size: 16px;
    }

    .country-details img {
      width: 100%;
      max-width: 400px;
    }

    .details-text-container {
      width: 100%;
    }

    .border-countries {
      gap: 6px;
    }
  }
`;

export default function CountryDetail() {
  const params = useParams();
  const { state } = useLocation();
  const countryName = params.country;

  const [countryData, setCoutryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const [isLight] = useTheme();
  function updateCountryData(data) {
    setCoutryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      flag: data.flags.svg,
      tld: data.tld,
      languages: Object.values(data.languages || {}).join(", "),
      currencies: Object.values(data.currencies || {})
        .map((currency) => currency.name)
        .join(", "),
      borders: [],
    });
    if (!data.borders) {
      data.borders = [];
    }
    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) =>
      setTimeout(() =>
        setCoutryData((prevState) => ({ ...prevState, borders }))
      )
    );
  }
  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <h2 style={{ color: "#000" }}>Country Not Found</h2>;
  }

  return (
    <StyledMain className={`${isLight ? "light" : ""}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        {countryData === null ? (
          <CountryDetailsShimmer />
        ) : (
          <div className="country-details">
            <img src={countryData.flag} alt={`${countryData.name} flag`} />
            <div className="details-text-container">
              <h1>{countryData.name}</h1>
              <div className="details-text">
                <p>
                  <b>
                    Native Name: {countryData.nativeName || countryData.name}
                  </b>
                  <span className="native-name"></span>
                </p>
                <p>
                  <b>
                    Population: {countryData.population.toLocaleString("en-IN")}
                  </b>
                  <span className="population"></span>
                </p>
                <p>
                  <b>Region: {countryData.region}</b>
                  <span className="region"></span>
                </p>
                <p>
                  <b>Sub Region: {countryData.subregion}</b>
                  <span className="sub-region"></span>
                </p>
                <p>
                  <b>
                    Capital:{" "}
                    {countryData.capital?.length > 0
                      ? countryData.capital.join(", ")
                      : ""}
                  </b>
                  <span className="capital"></span>
                </p>
                <p>
                  <b>Top Level Domain: {countryData.tld}</b>
                  <span className="top-level-domain"></span>
                </p>
                <p>
                  <b>Currencies: {countryData.currencies}</b>
                  <span className="currencies"></span>
                </p>
                <p>
                  <b>Languages: {countryData.languages}</b>
                  <span className="languages"></span>
                </p>
              </div>
              {countryData.borders.length !== 0 && (
                <div className="border-countries">
                  <b>Border Countries: </b>
                  {countryData.borders.map((border) => (
                    <Link to={`/${border}`} key={border}>
                      {border}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </StyledMain>
  );
}
