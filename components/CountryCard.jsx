import React from "react";
import styled from "styled-components";
import { Link } from "react-router";

const StyleCard = styled(Link)`
  flex: 0 0 calc(100% / 4 - 30px * 3 / 4);
  text-decoration: none;
  color: #918989;
  border: 1px solid #3d3b3b;
  border-radius: 8px;
  overflow: hidden;   

  & .imgContainer {
    height: 210px;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .card-txt {
    padding: 24px;
  }
  h3.card_title {
    font-size: 24px;
    color: var(--grey);
    margin-bottom: 10px;
  }

  & p {
    font-size: 18px;
    color: var(--grey);
    margin-bottom: 12px;
  }
    @media (max-width: 749px){
    flex: 0 0 calc(100%);
    }
`;
function CountryCard({ name, flag, population, region, capital, data }) {
  return (
    <StyleCard to={`/${name}`} className="country-card" state={data}>
      <div className="imgContainer">
        <img src={flag} alt={`${name} flag`} />
      </div>
      <div className="card-txt">
        <h3 className="card_title">{name}</h3>
        <p>
          <b>Population: </b> {population}
        </p>
        <p>
          <b>Region: </b> {region}
        </p>
        <p>
          <b>Capital: </b> {capital ? capital : "No Capital"}
        </p>
      </div>
    </StyleCard>
  );
}

export default CountryCard;
