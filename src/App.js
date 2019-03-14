import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import "./App.css";
import Sketchone from "./components/Sketchone";

class App extends Component {
  render() {
    return (
      <div>
        <h1>React.js with P5 </h1>
        <P5Wrapper className="sketch" sketch={Sketchone} />
      </div>
    );
  }
}

export default App;
