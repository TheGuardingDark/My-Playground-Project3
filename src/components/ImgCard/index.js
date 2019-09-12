import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
      <div className="card">
          <div className="img-container">
              <img 
               className="card-img-top" 
               alt={props.name}
               src={props.image}
               clicked={props.clicked}
               onClick={()=>props.handleClick(props.id)} />
          </div>
      </div>
  )};

  export default CharacterCard;