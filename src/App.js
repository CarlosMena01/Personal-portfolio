import React from "react";
import { Navegator } from "./componets/navegator";
import { Social } from "./componets/social";
import { HomePage } from "./homePage";
import { AboutPage } from "./aboutPage";
import { ProjectsPage } from "./projectsPage";
import { ExperiencePage } from "./experiencePage";
import { EducationPage } from "./educationPage";
import { ContactPage } from "./contactPage";

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
      <EducationPage/>
      <ContactPage/>
    </React.Fragment>
  );
}

export default App;
