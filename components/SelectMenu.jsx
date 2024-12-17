import styles from './SearchFilter.module'

export default function SelectMenu({setQuery}) {
  return (
    <select className={`${styles["filter-by-region"]} filter`} onChange={(e)=> setQuery(e.target.value.toLowerCase())}>
        <option hidden>Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>  
    </select>
  )
}
