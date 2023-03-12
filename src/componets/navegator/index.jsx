import React, { useEffect, useRef } from "react";
import { AppContext } from "../../data/context";
import { en_US, es_LA } from "../../data/lenguages";
import "./navegator.css"

function Navegator(){
    const  {useLenguage, lenguage, currentSection, setCurrentSection} = React.useContext(AppContext);

    function ChangeLenguage(lenguage) {
        useLenguage(lenguage)
    }

    // Añade un efecto para actualizar el estado de currentSection cuando el usuario cambia de sección
    useEffect(() => {
        function handleScroll() {
            const sections = document.querySelectorAll('section');
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
                    setCurrentSection(section.id);
                    break;
                }
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setCurrentSection]);

    useEffect(function(){},[lenguage])
    return(
        <nav className="navegator">
            <div className="buttons">
                <button onClick={function(){ChangeLenguage(en_US)}} className={(lenguage === en_US)? "main-btn btn":"second-btn btn"}>EN</button>
                <button onClick={function(){ChangeLenguage(es_LA)}} className={(lenguage === es_LA)? "main-btn btn":"second-btn btn"}>ES</button>
            </div>
            <div className="main-navegator">
                {Object.values(lenguage.navegator).map(item =>( <a key={item} href={"#"+item} id={"bt-"+item} className={(currentSection === item)? "current-section":""}>{item}</a> ))}
            </div>
        </nav>
    );
}

export {Navegator}
