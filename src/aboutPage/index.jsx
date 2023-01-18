import React from "react";
import { AppContext } from "../data/context";
import { Titles } from "../componets/titles";
import { Skill } from "../componets/skill";

import fastAPI from "../assets/fastAPI.svg"
import react from "../assets/react.svg"
import git from "../assets/git.svg"
import linux from "../assets/linux.svg"
import mySQL from "../assets/mySQL.svg"
import SQLAlchemy from "../assets/SQLAlchemy.svg"
import unity from "../assets/unity.svg"

import "./aboutPage.css"

function AboutPage(){
    const {lenguage} = React.useContext(AppContext);

    /* Skills list */
    const skills = [
        {name: "FastAPI", icon: fastAPI, doc: "https://fastapi.tiangolo.com/"},
        {name: "React", icon: react, doc: "https://reactjs.org/"},
        {name: "Git", icon: git, doc: "https://git-scm.com/"},
        {name: "Linux", icon: linux, doc: "https://www.linux.org/"},
        {name: "mySQL", icon: mySQL, doc: "https://www.mysql.com/"},
        {name: "SQLAlchemy", icon: SQLAlchemy, doc: "https://www.sqlalchemy.org/"},
        {name: "Unity", icon: unity, doc: "https://unity.com/"},

    ]
    return(
        <section className="AboutPage page">
            <div className="main-section">
                <Titles className="title"> About me </Titles>
                <div className="text">
                    <p>{lenguage.aboutPage.p1}</p>
                    <br />
                    <p>{lenguage.aboutPage.p2}</p>
                    <br />
                    <p>{lenguage.aboutPage.p3}</p>
                </div>
                <div className="circle"/>
            </div>
            <div className="second-section">
                <Titles className="title"> Skills </Titles>
                <div className="skills">
                    {skills.map(function(skill){
                        return(<Skill icon = {skill.icon} text = {skill.name} doc = {skill.doc}></Skill>);
                    })}
                </div>
            </div>
        </section>
    );
}

export {AboutPage}