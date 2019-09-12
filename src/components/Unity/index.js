import React from "react";
import './style.css';

function Unity() {
  return (
    <div className="unityGame">
      <h1>Demo Embedded Unity Game</h1>
      <iframe src="https://i.simmer.io/@SummoningDark/~bca06993-614c-3fa6-ddc3-8a3401c3928d" 
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="unityGame"></iframe>
    </div>
  )
};

export default Unity;