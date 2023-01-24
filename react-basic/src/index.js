import React from "react";
import ReactDOM from "react-dom";

const fName = "Ahmed";
const lName = "Shakeel";

// javascript expressions in JSX
// JSX attributes use camlecased version of html global attribiutes

const image1 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7cYcH4m0yMeufIWDWdsIZgHaFj%26pid%3DApi&f=1&ipt=8113681082c10d915f0c4cd1d2e86989d4b694405debaa8471f98efaafa165b7&ipo=images";
const image2 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.QRzC-RJHu1bkOi9K-80C-AAAAA%26pid%3DApi&f=1&ipt=987c29d77f72e1ab91005ebcc5e1df78ef1521cf073d825733bb6b370fce83c0&ipo=images";
const image3 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.rQLhQOuMDbv9pyFu0vf-xwHaLX%26pid%3DApi&f=1&ipt=9ea1a55c3e2823c4addc955832455b71cc890e2902ad8b3ccee6d015e13715d8&ipo=images";

ReactDOM.render(
  <div>
    <h1 className="heading">My favorite books</h1>
    <img className="bookImages" src={image1}></img>
    <img className="bookImages" src={image2}></img>
    <img className="bookImages" src={image3}></img>
    <p>Created by {fName} {lName}</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
// what to show, where to show
