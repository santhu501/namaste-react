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
// React Element is a JS object that is later converted to HTML as part of render.
const JSXElement = <h1 className="parent"> namaste react </h1>;

const JSX2 = (<h1 className="parent" tabIndex="5"> 
namaste react </h1> );

console.log(JSXElement);

//const heading = React.createElement("h1", {id:"h1Element"}, "first react");
const rootElem = ReactDOM.createRoot(document.getElementById("root"));
//rootElem.render(JSXElement);

// React functional components are the ones that are mostly used now.
// React class based components usage is pretty old pattern.
// A function that returns React element or JSX is a React functional component.
// A functional component name should always start with a capital letter.

const HeadingComponent = () => {
    return <h1 classNa="parent"> Namaste React from React functional component </h1>
};

// or for one line statements, we can right like below ways.

const HeadingComponent2 = () => <h1 className="parent"> Namaste React from React functional component 2 </h1>;

// or 

const HeadingComponent3 = () => (
<h1 className="parent"> Namaste React from React functional component 3 </h1>
);


// A component inside a component is called component compostion.

// we can write javascript code inside JSX with in curly braces. JSX will also sanitize the code inside curly braces to avoid malicious scripts.
// JSX will prevent cross site scripting.

const num = 2345;
const num2 = 999;

const Title = () => (
    <div className="testDiv">
        {num}
        <h2>{num2}</h2>
        <HeadingComponent2/>
        <h1 className="heading"> h1 element info </h1>
    </div>
);

// To render a functional component, you cannot use HeadingComponent directly in render. you need to send it as react element which is <HeadingComponent/>
rootElem.render(<Title/>);