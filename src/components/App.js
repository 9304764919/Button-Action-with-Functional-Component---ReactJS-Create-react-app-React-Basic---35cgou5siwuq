import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [p,setp]=useState("");
  function addp(){
    setp="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  }
  return (
    <div id="main">
      // Do not alter the main div
    <p id="para">{p}</p>
    <button id="click" onclick={addp}>Add</button>
    
    </div>
  );
}


export default App;
