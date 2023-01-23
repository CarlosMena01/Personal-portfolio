import React from "react";
import { AppContext } from "../data/context";
import { Titles } from "../componets/titles";
import { Project } from "../componets/project";
import profile from "../assets/profile_img.png"
import "./projectsPage.css"

function ProjectsPage(){
    const {lenguage} = React.useContext(AppContext);

    const projects = [
        {name: "React" , description: "No sé qué hacer", imagen: profile, tags: ["React", "FastAPI", "Web","React", "FastAPI", "Web"] }
    ]

    return(
        <section className="projectsPage page" id={lenguage.navegator.item2}>
            <div className="header">
                <Titles className= "title"> Projects</Titles>
            </div>
            <div className="projects">
            {projects.map(function(project){
                        return(
                            <Project 
                            name = {project.name}
                            description = {project.description}
                            imagen = {project.imagen}
                            tags = {project.tags}
                            
                            ></Project>
                        );
                    })}

            </div>
        </section>
    )
}

export {ProjectsPage}