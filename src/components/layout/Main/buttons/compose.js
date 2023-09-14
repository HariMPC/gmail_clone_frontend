import React from "react";
import { useState } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import './compose.css';
import SendEmail from "./SendEmail";
const Compose =()=>{
    const [button, setButton] = useState(false);
    return(
        <div>
            <div className="Compose_Wrapper" onClick={()=>{setButton(true)}}>
            <EditOutlinedIcon fontSize="small"/>
            <p>Compose</p>
        </div>
        <SendEmail trigger={button} setTrigger={setButton}>
                <p>Send Mail</p>
            </SendEmail>
        </div>
        
        
    )
}

export default Compose;