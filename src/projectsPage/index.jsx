import React from "react";
import { AppContext } from "../data/context";
import { Titles } from "../componets/titles";
import { Project } from "../componets/project";

import plus from "../assets/plus.svg"
import imgPortfolio from "../assets/project_portfolio.png"
import imgONE from "../assets/project_ONE.png"
import imgUnity from "../assets/project_UNITY.png"

import "./projectsPage.css"

function ProjectsPage(){
    const {lenguage} = React.useContext(AppContext);

    const projects = [
        {name: "Encriptador" , description: lenguage.projectsPage.prj1, imagen: imgONE, tags: ["JavaScript","CSS3", "HTML5", "Web"],
        demo: "https://carlosmena01.github.io/EncriptadorTextoONE/", repo: "https://github.com/CarlosMena01/EncriptadorTextoONE" },
        {name: "My Website" , description: lenguage.projectsPage.prj2, imagen: imgPortfolio, tags: ["CSS", "ReactJS", "Web", "GitHub", "Personal"],
        demo: "https://github.com/CarlosMena01/Personal-portfolio", repo: "https://github.com/CarlosMena01/Personal-portfolio" },
        {name: "PathFinding" , description: lenguage.projectsPage.prj3, imagen: imgUnity, tags: ["Unity", "C#", "VideoGames", "GitHub", "Personal"],
        demo: "https://github.com/CarlosMena01/PathFinding", repo: "https://github.com/CarlosMena01/PathFinding" },
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
                            key = {project.name}
                            name = {project.name}
                            description = {project.description}
                            imagen = {project.imagen}
                            tags = {project.tags}
                            demo = {project.demo}
                            repo = {project.repo}
                            
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