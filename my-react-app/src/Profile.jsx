import React from 'react';
import "./Discover.css";
import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";

function Profile(props)
{
    return(
        <>
        
           <img src = {p1} className="ppic"/>
           <img src = {p2} className="ppic"/>
           <img src = {p3} className="ppic"/>
           <img src = {p1} className="ppic"/>
           <img src = {p2} className="ppic"/>
        
        </>
    )
}

export default Profile;