import imgsrc from "./img.png";
import './Browse.css';

function BrowseCard(props) {{
    return(
        <>
       <div className={props.c}>
      <div className="CardRec" style={{backgroundImage:`url(${imgsrc})`}}>
      </div>
      <p className="Card-title">Your First SkateBoard</p>
      <i className="fas fa-heart heart" ></i>
      <i class="fab fa-telegram-plane tel"> </i>
      </div>
        </>
    )
}}

export default BrowseCard;