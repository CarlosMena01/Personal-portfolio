import React, { useState } from "react";
import { es_LA } from "./lenguages";


const AppContext = React.createContext();

function  AppProvider(props){
    /* TODO change lenguage*/ 
    const [lenguage, useLenguage] = useState(es_LA);
    const [currentSection, setCurrentSection] = useState("Experience"); 
    const activeTags = ["React","FastAPI"] 

    return(
        <AppContext.Provider value={{
            lenguage, 
            useLenguage,
            currentSection,
            setCurrentSection,
            activeTags
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};

