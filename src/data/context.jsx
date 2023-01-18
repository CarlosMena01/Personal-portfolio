import React from "react";
import { es_LA, en_US } from "./lenguages";


const AppContext = React.createContext();

function  AppProvider(props){
    /* TODO change lenguage*/ 
    const lenguage = en_US;
    var currentSection = "Experience"; 

    return(
        <AppContext.Provider value={{
            lenguage, 
            currentSection
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};

