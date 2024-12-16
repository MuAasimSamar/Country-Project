import styled from "styled-components";
import { useTheme } from "../hooks/useTheme";

const StyledHeader = styled.header`
  border-bottom: 1px solid #404040;
  background-color: var(--blackBg);
  color: var(--white);
  position: sticky;
  top: 0;

  & .header-content {
    width: 95%;
    margin-inline: auto;
    display: flex;
    height: 9vh;
    justify-content: space-between;
    align-items: center;
  }
  & a {
    text-decoration: none;
    color: var(--white);
  }
  & .theme-changer {
   cursor: pointer;
  }
`;

export default function Header() {
  const [isLight, setIsLight]  = useTheme(); 

  return (
    <StyledHeader className={`header ${isLight && 'light'}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <div className="theme-changer" onClick={()=>{
          setIsLight(!isLight);
          localStorage.setItem('isLightMode', !isLight)
        }}>
          <i className={`fa-regular fa-${isLight ? 'moon' : 'sun' }`} />
          &nbsp; &nbsp; {isLight ? 'Dark' : 'Light' } Mode
        </div>
      </div>
    </StyledHeader>
  );
}
