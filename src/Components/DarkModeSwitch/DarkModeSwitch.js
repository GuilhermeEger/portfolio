import React, { useState } from "react"
import { PiMoonFill } from "react-icons/pi";
import { PiSunDimFill } from "react-icons/pi";
import "./DarkModeSwitch.css"


function DarkModeSwitch(props){

  return (
    <div className="modeSwitch" onClick={() => props.changeMode()}>
      {props.mode ? <PiSunDimFill className="themeIcon"/> : <PiMoonFill className="themeIcon"/>}
    </div>
  )
};

export default DarkModeSwitch;
