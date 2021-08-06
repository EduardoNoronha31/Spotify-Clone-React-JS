import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryIcon from "@material-ui/icons/LibraryMusic";
import SidebarOptions from "./SidebarOptions"
import "./Style/Sidebar.css"

function Sidebar(){
    return(
        <div className="sidebar">
            <img className="sidebar__logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            />
            <SidebarOptions Icon={HomeIcon} option="Início" />
            <SidebarOptions Icon={SearchIcon} option="Buscar" />
            <SidebarOptions Icon={LibraryIcon} option="Sua Biblioteca" />
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <br/>
            <hr/>
        </div>
    )

    
}

export default Sidebar