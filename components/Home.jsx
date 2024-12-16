import React, { useState } from 'react'
import { SearchBar } from './SearchBar';
import SelectMenu from './SelectMenu';
import CountriesList from './CountriesList';
import { ThemeContext } from '../contexts/ThemeContext';
import { useTheme } from '../hooks/useTheme';

function App() {
  const [query, setQuery] = useState('')  
   // this is called lifting up the (here we lift state to parent component)
  
  const [isLight] = useTheme();

  return (
   <>
    <main className={`${isLight ? 'light' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery}/>
        <SelectMenu setQuery={setQuery}/>
      </div>
      <CountriesList query={query}/>
    </main>
   </>
  )
}

export default App;