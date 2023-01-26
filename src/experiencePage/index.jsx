import React from "react";
import { AppContext } from "../data/context";
import { Experience } from "../componets/experience";
import { Titles } from "../componets/titles";
import "./experiencePage.css"

function ExperiencePage() {

    const [buttonActive,useButtonActive] = React.useState("btn1");
    const {lenguage} = React.useContext(AppContext);

    const [dataExperience, useDataExperience] = React.useState(lenguage.experiencePage.table1);
    function buttonToData(button) {
        switch (button) {
            case "btn1":
                return lenguage.experiencePage.table1;
            case "btn2":
                return lenguage.experiencePage.table2;
            case "btn3":
                return lenguage.experiencePage.table3;
        
            default:
                return lenguage.experiencePage.table1;
        }
    }

    function UpdateExperience(button) {
        useButtonActive(button);
        useDataExperience(buttonToData(button));
        
    }
    return(
    <section className="experincePage page" id={lenguage.navegator.item3}>
        <Titles>{lenguage.experiencePage.title}</Titles>
        <div className="container">
            <div className="buttons-exp">
                <button onClick={() => UpdateExperience("btn1") } className={ (buttonActive === "btn1")? "active button-exp":"button-exp"}>{lenguage.experiencePage.btn1}</button>
                <button onClick={() => UpdateExperience("btn2") } className={ (buttonActive === "btn2")? "active button-exp":"button-exp"}>{lenguage.experiencePage.btn2}</button>
                <button onClick={() => UpdateExperience("btn3") } className={ (buttonActive === "btn3")? "active button-exp":"button-exp"}>{lenguage.experiencePage.btn3}</button>
            </div>
            <Experience 
                position = {dataExperience.data[0]}
                company  = {dataExperience.data[1]}
                date  = {dataExperience.data[2]}
                description = {dataExperience.exp}
            ></Experience>

        </div>
    </section>
    );
}

export {ExperiencePage}