import React from "react";
import styled, { css, keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const ShimmerAnim = css`
  background: linear-gradient(
    to right,
    #3b3838 0%,
    #4f4c4c 20%,
    #3b3838 40%,
    #3b3838 100%
  );
  background-size: 400px 100%;
  animation: ${shimmer} 2s infinite linear;
`;

const StyledDetails = styled.div`
&.countryDetailsContainer {
width: 100%;
  max-width: 1600px;
  padding: 35px 35px 0 35px;
  min-height: calc(100vh - 111.6px);

}
  
  & .countryDetails {
    display: flex;
    justify-content: space-between;
    margin-top: 64px;
  }

  & .countryImg {
    width: 622px;
    height: 600px;
    background-color: #3b3838;
    ${ShimmerAnim}
  }

  & .countryContainer {
    width: 550px;
    height: 600px;

    & h1 {
      width: 100%;
      height: 43px;
      margin-bottom: 32px;
      background-color: #3b3838;
      ${ShimmerAnim}
    }

    & p {
      width: 100%;
      height: 23px;
      margin-bottom: 20px;
      background-color: #3b3838;
      ${ShimmerAnim}
    }
  }

  @media (max-width: 749px) {
    &.countryDetailsContainer {
      padding: 0px;
    }

    .countryDetails {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 32px;
      gap: 16px;
      padding: 0;
    }

    .countryContainer {
    width: 100%;
    height: 100%;
}

    & .countryImg {
      width: 100%;
      height: 400px;
    }
  }
`;
export default function CountryDetailsShimmer() {
  return (
    <StyledDetails className="countryDetailsContainer">
      <div className="countryDetails">
        <div className="countryImg"></div>
        <div className="countryContainer">
          <h1></h1>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </StyledDetails>
  );
}
