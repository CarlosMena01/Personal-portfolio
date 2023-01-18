import React from "react";
import { AppContext } from "../../data/context";
import { en_US, es_LA } from "../../data/lenguages";
import "./navegator.css"

function Navegator(){
    const  {lenguage, currentSection} = React.useContext(AppContext);
    return(
        <nav className="navegator">
            <div className="buttons">
                <button className={(lenguage === en_US)? "main-btn btn":"second-btn btn"}>EN</button>
                <button className={(lenguage === es_LA)? "main-btn btn":"second-btn btn"}>ES</button>
            </div>
            <div className="main-navegator">
                {Object.values(lenguage.navegator).map(item =>( <a href={"#"+item} className={(currentSection === item)? "current-section":""}>{item}</a> ))}
            </div>
        </nav>
    );
}

export {Navegator}