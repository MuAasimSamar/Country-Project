import styles from "./SearchFilter.module.css";

export function SearchBar({ setQuery }) {
  return (
    <div className={`${styles["search-container"]} search_Container`}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={(e)=>setQuery(e.target.value.toLowerCase())}
        type="text"
        className={styles.input}
        placeholder="Search for a country..."
      />
    </div>
  );
}
