import React from "react";
import { AppContext } from "../data/context";
import { Titles } from "../componets/titles";
import { Project } from "../componets/project";

import plus from "../assets/plus.svg"
import profile from "../assets/profile_img.png"

import "./projectsPage.css"

function ProjectsPage(){
    const {lenguage} = React.useContext(AppContext);

    const projects = [
        {name: "React" , description: lenguage.projectsPage.prj1, imagen: profile, tags: ["React", "FastAPI", "Web","React", "FastAPI", "Web"] },
        {name: "React" , description: lenguage.projectsPage.prj1, imagen: profile, tags: ["React", "FastAPI", "Web","React", "FastAPI", "Web"] },
        {name: "React" , description: lenguage.projectsPage.prj1, imagen: profile, tags: ["React", "FastAPI", "Web","React", "FastAPI", "Web"] },
        {name: "React" , description: lenguage.projectsPage.prj1, imagen: profile, tags: ["React", "FastAPI", "Web","React", "FastAPI", "Web"] },
    ]

    return(
        <section className="projectsPage page" id={lenguage.navegator.item2}>
            <div className="header">
                <Titles className= "title"> {lenguage.projectsPage.title}</Titles>
            </div>
            <div className="projects">
            {projects.slice(0,3).map(function(project){
                        return(
                            <Project 
                            name = {project.name}
                            description = {project.description}
                            imagen = {project.imagen}
                            tags = {project.tags}
                            
                            ></Project>
                        );
                    })}
            {
                (projects.length > 3)?<img  className="plus" src={plus} alt="Más proyectos" />: <span></span>
            }
            

            </div>
        </section>
    )
}

export {ProjectsPage}