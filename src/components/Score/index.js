import React from "react";
import "./style.css";

function Scores(props) {
    return (
        <div className="scores">
        <div className="highScoreValue">
            <h3>Highest Score: {props.highScore}</h3>
            <h3>Current Score: {props.yScore}</h3>
        </div>

        <div className="scoreValue">
            <h3>Wins: {props.wins}</h3>
            <h3>Losses: {props.losses}</h3>
        </div>
        </div>
    )
}

export default Scores;