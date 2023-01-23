import React from "react";
import { es_LA, en_US } from "./lenguages";


const AppContext = React.createContext();

function  AppProvider(props){
    /* TODO change lenguage*/ 
    const lenguage = en_US;
    var currentSection = "Experience"; 
    const activeTags = ["React","FastAPI"] 

    return(
        <AppContext.Provider value={{
            lenguage, 
            currentSection,
            activeTags
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};

