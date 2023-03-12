import React from "react";
import { AppContext } from "../data/context";

import profile_img from "../assets/profile_img.png"
import pattern from "../assets/pattern.svg"

import "./homePage.css"

import { es_LA } from "../data/lenguages";

import CV_Spanish from "../assets/CV_Spanish.pdf"
import CV_English from "../assets/CV_English.pdf"

function HomePage(){
    const {lenguage} = React.useContext(AppContext);
    function downloadCV() {
        if (lenguage === es_LA) {
            window.open( CV_Spanish, "_blank");
        } else {
            window.open( CV_English, "_blank");
        }
        
    }
    return(
        <section className="HomePage page">
            <div className="left-div">
                <p> {lenguage.homePage.item1} </p>
                <h1> Carlos Mena </h1>
                <div className="role">
                    <div className="typing">
                     {lenguage.homePage.item2}
                    </div>
                </div>
                <div className="buttons-container">
                    <button onClick={downloadCV} className="main-button">{ lenguage.homePage.button1}</button>
                    <button onClick={function(){window.location.href="#" + lenguage.navegator.item5}} className="second-button">{ lenguage.homePage.button2}</button>
                    
                </div>
            </div>
            <div className="right-div">
                <div className="circle-mask main-img">
                    <img src={profile_img} alt="profile" />
                </div>
                <div className="circle-mask second-img">
                    <img src={pattern} alt="pattern" />
                </div>
            </div>
        </section>

    );
}

export {HomePage}