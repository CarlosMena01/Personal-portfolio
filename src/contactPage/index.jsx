import React from "react";
import { AppContext } from "../data/context";
import { Titles } from "../componets/titles";

import "./contactPage.css";

function ContactPage(){
    const {lenguage, currentSection} = React.useContext(AppContext);
    return(
        <section className={"contactPage page "+ ((currentSection === lenguage.navegator.item5)? "visible":"")} id={lenguage.navegator.item5}>
            <div className="main-content">
            <Titles>{lenguage.contactPage.title}</Titles>
            <p>{lenguage.contactPage.description} <em>cmena@unal.edu.co</em></p>
            </div>
        </section>
    );
}

export {ContactPage}