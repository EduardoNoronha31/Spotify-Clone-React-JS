import React from "react";
import "./Style/SidebarOptions.css"

function SidebarOptions({ option, Icon }) {
    return (
        <div className="sidebarOptions">
            <Icon className="sidebarOptions_icon" />
            <p>{option}</p>
        </div>
            ) 
}

export default SidebarOptions