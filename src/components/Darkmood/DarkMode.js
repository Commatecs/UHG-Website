import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import { Switch } from "antd";

export const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
    }

    const togglethem = e => {
        if (e.target.checked) setDarkMode();
        else setLightMode();

    };
    return (
        <div className='dark_mode'>
            {/* <Switch checkedChildren={<Moon />} unCheckedChildren={<Sun />} defaultChecked /> */}
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={togglethem}
            />
            <label className='dark_mode_label' for='darkmode-toggle' style={{ marginTop: '12px', marginRight: '10px' }}>

            </label>
        </div>
    )
}