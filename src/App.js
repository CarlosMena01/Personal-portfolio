import React from "react";
import { Navegator } from "./componets/navegator";
import {HomePage} from "./homePage";

function App() {
  return (
    <React.Fragment>
      <Navegator></Navegator>
      <HomePage></HomePage>
    </React.Fragment>
  );
}

export default App;
