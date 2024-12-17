import styled from 'styled-components';

const Select = styled.select`
  background-color: #3b3838;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  border: 0.2px solid #666666;
  color: #dadada;
  font-size: 16px;

  &:focus-visible {
    outline: none;
    border: none;
  }

  & option {
    color: #dadada;
  }

`;

export default function SelectMenu({setQuery}) {
  return (
    <Select className="filter-by-region filter" onChange={(e)=> setQuery(e.target.value.toLowerCase())}>
        <option hidden>Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>  
    </Select>
  )
}
