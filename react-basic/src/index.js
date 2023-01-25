import React from "react";
import ReactDOM from "react-dom";


/**
 * Inline CSS styling in JSX
 * For inline styling which in html looks like style = "color: red"
 * we would need Javascript objects to be passed into the style attribute.
 * A sample javascript object for this example would be {color: "red"}
 * which can then pe passed to style attribute as style = {{color: "red"}}
 * Notice that whenever embedding javascript we need to use {} brackets
 */

// ReactDOM.render(
//   <div>
//     <h1 style={{color: "red"}}>Hello world</h1>
//   </div>,
//   document.getElementById("root")
// );

const date = new Date();
let hour = date.getHours();

let text;
let style = {color: ""};

if (hour >= 0 && hour <= 12) {text = "Good Morning"; style.color = "red"}
if (hour > 12 && hour <= 18) {text = "Good Afternoon"; style.color  = "green"}
if (hour > 18) {text = "Good Night"; style.color = "blue"};

ReactDOM.render(
  <div>
    <h1 className="heading" style={style}>{text}</h1>
  </div>,
  document.getElementById("root")
)