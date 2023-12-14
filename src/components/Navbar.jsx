import { useState } from "react";
import "./Navbar.css";
import {DarkMode} from './Darkmood/DarkMode'

export const Navbar = () => {
    const [active, setActive] = useState("")

    const changeActive = () => {
        if(active === "active")
            setActive("")
        else
            setActive("active")
    }

    return (
        <nav className="navbar">
            <div className="brand-title">United Hawks</div>
            <a href="#" onClick={() => changeActive()} className="toggle-btn">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className={`navbar-links ${active}`}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#contact">Contact US</a></li>
                    <DarkMode />
                </ul>
               
            </div>
        </nav>
    )
}