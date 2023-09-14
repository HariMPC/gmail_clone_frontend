import React from "react";
import './Inbox.css';

import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Checkbox, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { emailData } from "./temp/emaildata";
import EmailItems from "./Emailitems/emailitems";

const Inbox=({mailCount})=> {

    return(
        <div className="Inbox_Container">
            <div className="Top_row">
            <div className="topBar-left">
            <IconButton>
                    <Checkbox size='small' />
                    <ExpandMoreIcon fontSize='small' />
                </IconButton>
                <IconButton>
                    <RefreshIcon fontSize='small' />
                </IconButton>
                <IconButton>
                    <MoreVertIcon fontSize='small' />
                </IconButton>
            </div>
            <div className='topBar-right'>
                <span> 1 - {mailCount} of {mailCount}</span>
                <IconButton>
                    <ChevronLeftIcon fontSize='small' />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon fontSize='small' />
                </IconButton>
            </div>
            </div>
            <div className="Email_Container">
                    {emailData.map(({ starred,from,subject,message,received,read})=>(
                        <EmailItems
                            starred={starred}
                            from={from}
                            subject={subject}
                            message={message}
                            received={received}
                            read={read}
                        />))}
            </div>
        </div>
    )
}

export default Inbox;