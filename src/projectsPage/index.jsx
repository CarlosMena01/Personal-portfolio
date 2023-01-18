import React from "react";
import { AppContext } from "../data/context";
import { Titles } from "../componets/titles";
import "./projectsPage.css"

function ProjectsPage(){
    const {lenguage} = React.useContext(AppContext);
    return(
        <section className="projectsPage page" id={lenguage.navegator.item2}>
            <Titles className= "title"> Projects</Titles>
        </section>
    )
}

export {ProjectsPage}