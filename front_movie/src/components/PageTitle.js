import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';


export default function PageTitle({title}) {
    //const { title } = props
    return (
        // Home page
        //  <div style={{display:'flex',backgroundColor:"#191919"}}> 
        // <h1 style={{paddingLeft: 20,paddingTop: 20, color:color} className={maj ? "maj" : undefined}>
        <div> 
        <h1>
         {title}
        </h1>

        {/* <ul style={{display:'flex', listStyle: 'none',
   marginLeft: 1000, marginTop: 20, paddingTop: 25}}>
            <li style={{marginLeft:"3rem",margin:'20px',marginTop:'10px'}}>Acceuil</li>
            <li style={{marginLeft:"3rem",margin:'20px',marginTop:'10px'}}>Contact</li>
            <li style={{marginLeft:"3rem",margin:'20px',marginTop:'10px'}}>Sign-out</li>
        </ul> */}
        </div>
        
    )
}

