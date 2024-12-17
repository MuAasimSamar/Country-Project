import styled from 'styled-components';

const SearchDiv =  styled.div`
  background-color: #3b3838;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  border: 0.2px solid #666666;

 & .input {
  background-color: #3333;
  border: none;
  font-size: 16px;
  margin-left: 10px;
  caret-color: #fff;
  font-weight: 500;
  color: #dadada;

  &:focus-visible {
    outline: none;
    border: none;
  }
}
  `;

export function SearchBar({ setQuery }) {
  return (
    <SearchDiv className="search-container search_Container">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={(e)=>setQuery(e.target.value.toLowerCase())}
        type="text"
        className="input"
        placeholder="Search for a country..."
      />
    </SearchDiv>
  );
}
