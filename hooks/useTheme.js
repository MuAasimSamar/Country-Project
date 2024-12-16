import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export function useTheme() {
 const [isLight, setIsLight] = useContext(ThemeContext);
 return [isLight, setIsLight]; 
}