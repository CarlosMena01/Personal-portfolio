import React from "react";
import { Titles } from "../componets/titles";
import { AppContext } from "../data/context";
import "./educationPage.css"


function EducationPage(){
    const {lenguage} = React.useContext(AppContext);

    function Education(props){
        return(
            <>
                <h2>{props.title} <em>{"@" + props.institution}</em></h2>
                <li>{props.description}</li>
            </>
        );
    }

    return(
    <section className="experincePage page" id={lenguage.navegator.item4}>
        <Titles>{lenguage.educationPage.title}</Titles>
        <div className="container">
            <div className="main-education">
                {lenguage.educationPage.edu.map(function(edu){
                    return( <Education 
                        key = {edu[0]}
                        title={edu[0]}
                        institution = {edu[1]}
                        description = {edu[2]}
                    ></Education> );
                })}
            </div>
            <div className="courses">
                <h2>{lenguage.educationPage.course}</h2>
                {lenguage.educationPage.courses.map(function(course){
                    return( 
                        <h3>{course[0]} <em>{"@" + course[1]}</em></h3>
                    );
                })}
            </div>
        </div>
    </section>
    );
}

export {EducationPage}