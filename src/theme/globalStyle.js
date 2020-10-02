import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');
html{
  font-size: 62.5%;
  box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    position: relative;
    font-family: 'Montserrat', sans-serif;
    background: #000;
  }
`;
 
export default GlobalStyle;