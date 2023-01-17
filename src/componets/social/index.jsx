import React from "react";
import gitHub from "../../assets/github.svg"
import linkedIn from "../../assets/linkedin-in.svg"
import "./social.css"


function Social(){
    return(
        <div className="social-container">
            <img className="icon" src={linkedIn} alt="LinkedIn" />
            <img className="icon" src={gitHub} alt="GitHub" />
        </div>
    );   
}

export {Social}