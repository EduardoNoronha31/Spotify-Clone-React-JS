import { Search } from "@material-ui/icons";
import React from "react";
import "./Style/Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Search />
                <input type="text" placeholder="Busque por artistas sons ou podcastas" />
            </div>
            <div className="header__right">
                <h4>Eduardo Noronha</h4>

            </div>
        </div>
    )
}

export default Header;