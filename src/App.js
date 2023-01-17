import React from "react";
import { Navegator } from "./componets/navegator";
import {HomePage} from "./homePage";
import {Social} from "./componets/social";

function App() {
  return (
    <React.Fragment>
      <Navegator/>
      <Social/>
      <HomePage/>
      <HomePage/>
    </React.Fragment>
  );
}

export default App;
