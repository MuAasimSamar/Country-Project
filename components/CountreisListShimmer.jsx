import styled, { css, keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const ShimmerEffect = css`
  background: linear-gradient(to right, #3b3838 0%, #4f4c4c 20%, #3b3838 40%, #3b3838 100%);
  background-size: 400px 100%;
  animation: ${shimmer} 2s infinite linear;
`;

const ShimmerCard = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  width: 95%;
  margin-inline: auto;

  & .country-card {
    height: 410px;
    border: 1px solid #3d3b3b;
    border-radius: 8px;
    background-color: #09090b;
    flex: calc(100% / 4 - 30px * 3 / 4);
    overflow: hidden;
  }
  & .shimmerImg {
    height: 210px;
    background-color: #3b3838;
    ${ShimmerEffect}
  }
  & .shimmerContent {
    padding: 24px;
  }

  & .shimmerTitle {
    height: 35px;
    margin-bottom: 18px;
    background-color: #3b3838;
    border-radius: 4px;
    ${ShimmerEffect}
  }
  & .shimmerPopulation,
  .shimmerRegion,
  .shimmerCapital {
    height: 20px;
    background-color: #3b3838;
    margin-bottom: 15px;
    border-radius: 4px;
    ${ShimmerEffect}
  }

  @media (max-width: 749px) {
  &  .country-card {
    background-color: #09090b;
    flex: calc(100%);
  }
  }
`;
function CountreisListShimmer() {


  return (
    <ShimmerCard className="countreis-list shimmer-list">
      {Array.from({ length: 16 }).map((elem, ind) => (
        <div key={ind} className="country-card">
          <div className="shimmerImg"></div>
          <div className="shimmerContent">
            <div className="shimmerTitle"></div>
            <div className="shimmerPopulation"></div>
            <div className="shimmerRegion"></div>
            <div className="shimmerCapital"></div>
          </div>
        </div>
      ))}
    </ShimmerCard>
  );
}

export default CountreisListShimmer;
