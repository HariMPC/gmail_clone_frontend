import React from 'react';
import { useState } from "react";
import './logout.css';
import Logoutform from './logoutform';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Logout = ()=> {
    const [button, setButton] = useState(false);
  return (
    <div>
    <div className='logout_Sequence'onClick={()=>{setButton(true)}}>
        <AccountCircleIcon/>
    </div>
    <Logoutform trigger={button} setTrigger={setButton}>
    </Logoutform>
    </div>
  )
}

export default Logout