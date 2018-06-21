import React from "react";
import "./Title.css";

const that = {
  primary: {
    color: "#2f77c4",
    textShadow: "3px 3px 5px #0b395e",
    fontSize: "3.0rem",
    fontWeight: "bold",
    paddingTop: "2.0rem" 
  }
};
const Title = props => (
  <div>
    <div className="jumbotron.transparent jumbotron-fluid">
      <div className="title">
        <h1 style={that.primary}>Tropical Memory Click Game {props.children}</h1>
        <h2 style={that.curScore}>Click on an image to earn points, but don't click on any more than once!{props.children}</h2>
        <h2>
          Score: {props.curScore} | 
                      
          Highscore: {props.topScore}
        </h2>
      </div>
    </div>
  </div>
);

export default Title;