import React from "react";
import { Navegator } from "./componets/navegator";
import {Social} from "./componets/social";
import {HomePage} from "./homePage";
import { AboutPage } from "./aboutPage";
import { ProjectsPage } from "./projectsPage";
import { ExperiencePage } from "./experiencePage";

import "./App.css"


function App() {
  return (
    <React.Fragment>
      <Social/>
      <HomePage/>
      <Navegator/>
      <AboutPage/>
      <ProjectsPage/>
      <ExperiencePage/>
    </React.Fragment>
  );
}

export default App;
