import React from "react";
import { useState } from "react";
import './emailitems.css';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Checkbox, IconButton } from "@mui/material";

const EmailItems =({starred,from,subject,message,received,read})=>{
    const [ star, setStar ] = useState(starred);

    return(
        <div className="Email_Items_container">
            <Checkbox size='small'/>
            <IconButton onClick={()=> star ? setStar(false) : setStar(true)}>
                {   star ? (
                        <StarIcon htmlColor='#f7cb69' />
                    ) : (
                        <StarBorderIcon />
                    )
                }
            </IconButton>
            <p className={!read && 'unread'}> {from} </p>
            <div>
                <p className={!read && 'unread'}> {subject} </p> -<span>{message}</span>
            </div>
            <p className={!read && 'unread'}> {received}</p>
        </div>
    )
}

export default EmailItems;