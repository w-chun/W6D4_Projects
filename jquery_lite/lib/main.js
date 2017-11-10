const DomNodeCollection = require("./dom_node_collection");

window.$l = (arg) => {
  switch (typeof arg) {
  //   case "function":
  //
  // ,
    case "string":
     return document.querySelectorAll(arg);
    case "object":
     if (arg instanceof HTMLElement) {
       return new DomNodeCollection([arg]);
     }

}
//
// function $l(selector) {
//   let nodes = document.querySelectorAll(selector);
//   return Array.from(nodes);
// }

};
