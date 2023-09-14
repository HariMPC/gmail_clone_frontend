import React from "react";
import "./main.css";
import Sidebar from "./Sidebar";
import Sideicons from "./Sideicons";
import Inbox from "./Inbox";
import Header from "../../Header/Header";
function Main() {
    return(
        <div>
            <Header/>
            <div className="Main_Container">
            <div className="SideBarLayout">
            <Sidebar/>
            </div>
            <Inbox/>
            <Sideicons/>
        </div>
        </div>
        
    )
}

export default Main;