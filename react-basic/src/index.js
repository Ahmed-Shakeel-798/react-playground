// Props are properties on our custom React components
// Just like we have attributes of html elements we can have them custom for  our components
// Allows us to reuse components with different data
// We can't use the normal attributes of html elements in our props because all of them will be seen as custom properties

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.


