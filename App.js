import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 
 * <div id="parent">
 *    <div id="child">
 *        <h1> this is h1 tag </h1>
 *        <h2> this is h2 tag </h2>
 *    </div>
 * </div>
 * 
 * 
 * 
 * 
 */
/* 
const parentElement = React.createElement("div", { id: "parent" },
        React.createElement("div", { id: "child" },
            [ React.createElement("h1", {key: "1"}, "this is h1 tag"), React.createElement("h2", {key: "2"}, "this is h2 tag") ] ));

console.log(parentElement); */

// JSX is converted to react element by Babel. JSX is not html.
// JSX can be used with parenthesis for multiple lines, for single line paranthesis is optional.
const JSXElement = <h1 className="parent"> namaste react </h1>;

const JSX2 = (<h1 className="parent" tabIndex="5"> 
namaste react </h1> );

console.log(JSXElement);

//const heading = React.createElement("h1", {id:"h1Element"}, "first react");
const rootElem = ReactDOM.createRoot(document.getElementById("root"));
rootElem.render(JSXElement);