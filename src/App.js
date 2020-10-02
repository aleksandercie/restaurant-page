import React, { Fragment } from 'react';
import GlobalStyle from './theme/globalStyle';
import { HashRouter} from "react-router-dom";
import Nav from './components/nav/navbar/Navbar';
import Pages from './components/pages/Pages';
import ScrollToTop from './components/scrollToTop/ScrollToTop'

function App() {
  
  return (
      <HashRouter>
        <Fragment>
              <GlobalStyle />
              <Nav/>
              <Pages />
        </Fragment>
        <ScrollToTop />
      </HashRouter>
  );
}

export default App;
