import React from "react";

import './Sidebar.css';
import Compose from "./buttons/compose";
import { sidebarbuttonicons } from "./Data/sidebarbuttonicons";
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import AddIcon from '@mui/icons-material/Add';

const Sidebar=()=> {
    return(
        <div className="Sidebar_Container">
        <div className="top_section">
            <div className="Compose">
                <Compose/>
            </div>

            <div className="Side_buttons">
            {
                sidebarbuttonicons.map(item =>(
                <div className="SideBarButtonIcons">
                    {item.icon} {item.text}
                </div>
                ))
            }
            </div>
        </div>
        
        <div className="bottom_section">
        <div className="google_meet">
            <h4 className="Title">Meet</h4>
            <p><VideocamIcon/> New Meeting</p>
            <p><KeyboardIcon/> Join Meeting</p>
        </div>
        <div className="Lable">
            <h4 className="Title">Lables</h4>
            <p> <AddIcon/></p>
        </div>
        </div>
        
    </div>
    )
}

export default Sidebar;