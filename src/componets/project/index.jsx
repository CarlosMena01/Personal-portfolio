import React from "react";
import { AppContext } from "../../data/context";
import "./project.css"

function Project(props){
    const {activeTags} = React.useContext(AppContext);
    return(
        <div className="project">
            <div className="image">
                <img src={props.imagen} alt={props.name} />
            </div>
            <div className="description">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <div className="buttons-view">
                    <a href={props.demo} className="demo">Demo</a>
                    <a href={props.repo} className="repo">Repo</a>
                </div>
                <div className="tags">
                    {props.tags.map(function(tag){
                        return( <span className={"tag" + ((activeTags.includes(tag))? "-active":"")}>{tag}</span> );
                    })}
                </div>
            </div>
        </div>
    );
}

export {Project}