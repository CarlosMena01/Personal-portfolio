import React from "react";
import gitHub from "../../assets/github.svg"
import linkedIn from "../../assets/linkedin-in.svg"
import "./social.css"


function Social(){
    return(
        <div className="social-container">
            <img onClick={function(){window.open("https://www.linkedin.com/in/carlos-mena-t/", "_blank")}} className="icon" src={linkedIn} alt="LinkedIn" />
            <img onClick={function(){window.open("https://github.com/CarlosMena01", "_blank")}} className="icon" src={gitHub} alt="GitHub" />
        </div>
    );   
}

export {Social}