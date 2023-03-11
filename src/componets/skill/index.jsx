import React from "react";
import "./skill.css"

function Skill(props){
    return(
        <div className="skill">
            <img onClick={function(){window.open( props.doc, "_blank")}} src={props.icon} alt={props.text} />
            <p>{props.text}</p>
        </div>
    );
}

export {Skill}