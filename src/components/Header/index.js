import React from "react";
import './style.css';

function Header() {
  return (
    <div className="header">
      <h1>Welcome to the Clicky Game</h1>
      <p>Your goal is to click each image exactly once. For every new image you click, you'll score a point, if you click an image you've previously clicked, your score will be reset to zero and the game will start over.</p>
    </div>
  )
};

export default Header;