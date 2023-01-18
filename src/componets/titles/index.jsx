import React from "react";
import "./titles.css"

function Titles(props){
    return(
        <h1 className="title">{props.children}</h1>
    );
}

export {Titles}