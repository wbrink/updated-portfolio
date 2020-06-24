import React from 'react';
// import './App.css';
import Nav from "./Components/Nav";
import { useMediaQuery } from "react-responsive";
import MobileNav from './Components/MobileNav/index.js';
import Backdrop from './Components/Backdrop';
import Splash from "./Components/Splash";
import About from "./Components/About"
import Skills from "./Components/Skills"
import Portfolio from './Components/Portfolio';

function App() {
 
  const isLargeScreen = useMediaQuery({query: "(min-width: 1201px)"});
  const isBigScreen = useMediaQuery({query: "(min-width: 900px and max-width: 1200px"})
  const isSmallScreen = useMediaQuery({query: "(max-width: 899px)"}) 

  let marginLeft = 0

  if (isLargeScreen) {
    // set margin left for other componenets to 300
    marginLeft = 300;
  } else if (isBigScreen) {
    // set margin left 225px
    marginLeft = 225;
  } else if (isSmallScreen) {
    // margin -left is 0
    marginLeft = 0;
  }

  return (
    <div>
      {isLargeScreen  && <Nav />}
      {isBigScreen  && <Nav />}
      {isSmallScreen && <MobileNav />}        
      <Splash margin={marginLeft} />
      <About margin={marginLeft} />
      <Skills margin={marginLeft} />
      <Portfolio margin={marginLeft}/>
    </div>
  );
}

export default App;
