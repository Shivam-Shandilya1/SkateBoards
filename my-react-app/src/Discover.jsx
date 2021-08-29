import React from 'react';
import Profile from './Profile';

import fCard from "./Card.png";
import w1 from "./w1.png";
import w2 from "./w2.png";
import "./Discover.css";
import Test from "./Test";
import Footer from "./Footer";
import Whead1 from "./Whead1";
import Whead2 from "./Whead2";
function Discover()
{
    return(
        <>
        <div className="D">
            <header className="D-header">
            <Test />
            <i class="fas fa-search mg" style={{color:"#02b6ce",}}></i>
           </header>
        </div>
        <div className="profilePane">
           <Profile/>
        </div>

        <div className="Card">
             <img className="CardPick" src = {fCard} />
        </div>

        <p className="wtag"> Most Watched</p>
    
        <img src = {w1} className = "list" style={{display:"inline-block",marginRight:20+"px"}} />
           <div style={{display:"contents"}}>
           <p style={{display:"inline-block",textAlign:"left",width:"50%"}}> <Whead1/> </p>
           </div>
<br />

        <img src = {w2} className = "list" style={{display:"inline-block",marginRight:20+"px"}}/>
           <div style={{display:"contents"}}>
           <p style={{display:"inline-block",textAlign:"left",width:"50%"}}><Whead2/></p>
           </div>
  

        <Footer/>
        </>
    )
}

export default Discover;