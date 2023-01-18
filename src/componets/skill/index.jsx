import React from "react";
import "./skill.css"

function Skill(props){
    return(
        <div className="skill">
            <img src={props.icon} alt={props.text} />
            <p>{props.text}</p>
        </div>
    );
}

export {Skill}