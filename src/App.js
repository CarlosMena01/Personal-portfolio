import React from "react";
import { Navegator } from "./componets/navegator";
import {Social} from "./componets/social";
import {HomePage} from "./homePage";
import { AboutPage } from "./aboutPage";
import { ProjectsPage } from "./projectsPage";

import "./App.css"


function App() {
  return (
    <React.Fragment>
      <Social/>
      <HomePage/>
      <Navegator/>
      <AboutPage/>
      <ProjectsPage/>
    </React.Fragment>
  );
}

export default App;
