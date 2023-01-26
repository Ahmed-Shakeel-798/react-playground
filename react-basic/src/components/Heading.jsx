import React from "react";

function Heading() {
  const date = new Date();
  const hours = date.getHours();
  
  let textToSay = "Good Morning";
  const style = {color: "red"};
  
  if(hours > 12 && hours <= 18){
    textToSay = "Good Afternoon";
    style.color = "green";
  }else if( hours > 18 ){
    textToSay = "Good Night";
    style.color = "blue";
  }
  return <h1  className="heading" style={style}>{textToSay}</h1>;
}

export default Heading;
