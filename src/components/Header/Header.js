import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import Logout from './logout/logout'
import "./Header.css";

function Header(){

    return(
        <div className="Header_Container">
            <div className="Logo_container">
            <div className="Menu">
            <MenuIcon/>
            </div>
            <div className="Logo">
            <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png' alt="gmail.jpg"/>
            </div>
            </div>
            <div className="Seach_container">
                <div className="Search_Bar">
                <SearchIcon/>
                <input type="text" placeholder="Search mail" />
                <ExpandMoreIcon/>
                </div>
            </div>
            <div className="Icons_container">
                <HelpOutlineIcon/>
                <SettingsIcon/>
                <AppsIcon/>
                <Logout/>
            </div>
        </div>
    )
}

export default Header;
