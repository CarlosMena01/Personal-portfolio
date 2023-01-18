import React from "react";
import { AppContext } from "../data/context";
import profile_img from "../assets/profile_img.png"
import pattern from "../assets/pattern.svg"
import "./homePage.css"

function HomePage(){
    const {lenguage} = React.useContext(AppContext);
    return(
        <section className="HomePage page">
            <div className="left-div">
                <p> {lenguage.homePage.item1} </p>
                <h1> Carlos Mena </h1>
                <p className="role"> { lenguage.homePage.item2}</p>
                <div className="buttons-container">
                    <button className="main-button">{ lenguage.homePage.button1}</button>
                    <button className="second-button">{ lenguage.homePage.button2}</button>
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