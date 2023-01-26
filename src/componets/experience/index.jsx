import React from "react";
import "./experience.css"

function Experience(props){
    return(
        <div className="experience">
            <h2> {props.position} <em>{"@"+ props.company}</em></h2>
            <h4>{props.date}</h4>
            <ul>
                {props.description.map(function(item){
                    return(     <li>{item}</li>     );
                })}
            </ul>

        </div>
    );
}

export {Experience}