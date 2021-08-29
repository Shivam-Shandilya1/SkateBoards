import React from "react";
import "./Browse.css"
function Footer() {{
    return(
        <>
        <div className=".foot">
        <nav class="navbar fixed-bottom navbar-dark bg-dark">
            <div class="container-fluid" style={{height:65+"px"}}>
                <a class="navbar-brand" href="#"><i class="fas fa-home"></i></a>
                <a class="navbar-brand" href="#"><i class="fas fa-video"></i></a>
                <a class="navbar-brand" href="#"><i class="fas fa-bookmark"></i></a>
                <a class="navbar-brand" href="#"><i class="fas fa-arrow-right"></i></a>
            </div>
        </nav>            
        </div>
        </>
    )
}}
export default Footer;