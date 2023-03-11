import React, { useEffect } from "react";
import { AppContext } from "../../data/context";
import { en_US, es_LA } from "../../data/lenguages";
import "./navegator.css"

function Navegator(){
    const  {useLenguage, lenguage, currentSection} = React.useContext(AppContext);

    function ChangeLenguage(lenguage) {
        useLenguage(lenguage)
    }

    useEffect(function(){},[lenguage])
    return(
        <nav className="navegator">
            <div className="buttons">
                <button onClick={function(){ChangeLenguage(en_US)}} className={(lenguage === en_US)? "main-btn btn":"second-btn btn"}>EN</button>
                <button onClick={function(){ChangeLenguage(es_LA)}} className={(lenguage === es_LA)? "main-btn btn":"second-btn btn"}>ES</button>
            </div>
            <div className="main-navegator">
                {Object.values(lenguage.navegator).map(item =>( <a key={item} href={"#"+item} className={(currentSection === item)? "current-section":""}>{item}</a> ))}
            </div>
        </nav>
    );
}

export {Navegator}