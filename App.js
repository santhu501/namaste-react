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

const parentElement = React.createElement("div", { id: "parent" },
        React.createElement("div", { id: "child" },
            [ React.createElement("h1", {key: "1"}, "this is h1 tag"), React.createElement("h2", {key: "2"}, "this is h2 tag") ] ));

console.log(parentElement);
//const heading = React.createElement("h1", {id:"h1Element"}, "first react");
const rootElem = ReactDOM.createRoot(document.getElementById("root"));
rootElem.render(parentElement);